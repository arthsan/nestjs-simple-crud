import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://free-user:qDlKAXzFDe0nkTKX@cluster0.p6pt6.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
