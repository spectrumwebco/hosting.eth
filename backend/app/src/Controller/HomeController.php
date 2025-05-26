<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface;
use Spiral\Http\ResponseWrapper;

class HomeController
{
    private $response;

    public function __construct(ResponseWrapper $response)
    {
        $this->response = $response;
    }

    public function index(): ResponseInterface
    {
        return $this->response->json([
            'status' => 'success',
            'message' => 'Welcome to hosting.eth API',
            'version' => '0.1.0'
        ]);
    }
}
