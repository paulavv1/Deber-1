import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Return all usuarios.' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a usuario by id.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}