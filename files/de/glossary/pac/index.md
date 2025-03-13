---
title: PAC
slug: Glossary/PAC
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Eine Proxy-Auto-Konfigurationsdatei (**PAC-Datei**) ist eine Datei, die eine Funktion, `FindProxyForURL()`, enthält. Diese wird vom Browser verwendet, um zu bestimmen, ob Anforderungen (einschließlich HTTP, HTTPS und FTP) direkt an das Ziel gesendet oder über einen Web-Proxy-Server weitergeleitet werden sollen.

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host);
```

Siehe [Proxy-Auto-Konfigurationsdatei (PAC-Datei)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) für Details darüber, wie diese verwendet werden und wie neue erstellt werden können.

## Siehe auch

- [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) auf Wikipedia
- [Proxy-Auto-Konfigurationsdatei](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) auf MDN
