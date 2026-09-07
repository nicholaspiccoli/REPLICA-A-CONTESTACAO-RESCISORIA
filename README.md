# Réplica à Contestação — Ação Rescisória PICCOLI × SIMBAL

Aplicação web de leitura e navegação probatória da Ação Rescisória nº 0017896-26.2026.8.04.9001.

Arquitetura planejada:
- frontend estático hospedado na Vercel;
- grafo documental interativo com Cytoscape.js;
- base de dados Supabase para documentos, remissões, fundamentos e arestas do grafo;
- documentos-fonte permanecem no Google Drive, vinculados por URL e metadados; não são copiados para o repositório.

A identidade visual segue a réplica em PDF: marfim/off-white, dourado discreto e carvão, com linguagem visual jurídica sóbria.

> Não inserir chaves privadas ou service-role keys neste repositório. Somente a publishable key do Supabase pode ser usada no cliente, sempre com RLS habilitado.
