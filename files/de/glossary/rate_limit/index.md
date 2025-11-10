---
title: Ratenbegrenzung
slug: Glossary/Rate_limit
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Informatik, insbesondere im Netzwerkbereich, bedeutet **Ratenbegrenzung** die Kontrolle darüber, wie viele Vorgänge in einem bestimmten Zeitraum durchgeführt werden können, um in der Regel zu vermeiden, dass das System überlastet wird und es zu Leistungseinbußen kommt. Beispielsweise könnte ein Server die Anzahl der Anfragen begrenzen, die er von einem einzelnen Client in einem bestimmten Zeitraum akzeptiert, was nicht nur die Gesamtleistung des Servers optimiert, sondern auch Angriffe wie {{Glossary("Denial_of_Service", "DoS-Angriff")}} abschwächt.

Ratenbegrenzung ist typischerweise synonym mit {{Glossary("throttle", "Drosselung")}}, obwohl {{Glossary("debounce", "Entprellung")}} eine weitere praktikable Strategie ist, die in bestimmten Fällen eine bessere Semantik und Benutzererfahrung bietet.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Debounce", "Entprellung")}}
  - {{Glossary("Throttle", "Drosselung")}}
- {{HTTPStatus("429", "429 Too Many Requests")}}
- [Was ist Ratenbegrenzung? | Ratenbegrenzung und Bots](https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/) auf cloudflare.com
