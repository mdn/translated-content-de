---
title: PAC
slug: Glossary/PAC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine Proxy Auto-Configuration-Datei (**PAC-Datei**) ist eine Datei, die eine Funktion, `FindProxyForURL()`, enthält. Sie wird vom Browser verwendet, um zu bestimmen, ob Anfragen (einschließlich HTTP, HTTPS und FTP) direkt an das Ziel gesendet werden oder ob sie über einen Web-Proxy-Server weitergeleitet werden müssen.

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host);
```

Weitere Informationen zur Verwendung und Erstellung neuer PAC-Dateien finden Sie unter [Proxy Auto-Configuration (PAC) file](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file).

## Siehe auch

- [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) auf Wikipedia
- [Proxy Auto-Configuration file](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) auf MDN
