---
title: PAC
slug: Glossary/PAC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine Proxy Auto-Configuration Datei (**PAC-Datei**) ist eine Datei, die eine Funktion, `FindProxyForURL()`, enthält. Diese wird vom Browser verwendet, um zu bestimmen, ob Anfragen (einschließlich HTTP, HTTPS und FTP) direkt zum Ziel gehen sollen oder ob sie über einen Webproxy-Server weitergeleitet werden müssen.

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host);
```

Siehe [Proxy Auto-Configuration (PAC) Datei](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) für Details darüber, wie diese verwendet werden und wie man neue erstellt.

## Siehe auch

- [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) auf Wikipedia
- [Proxy Auto-Configuration Datei](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) auf MDN
