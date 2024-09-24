---
title: webNavigation.TransitionQualifier
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionQualifier
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zusätzliche Informationen über einen Übergang. Beachten Sie, dass viele Werte hier derzeit in Firefox nicht unterstützt werden: siehe die [Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- "client_redirect"
  - : Weiterleitung(en) verursacht durch JavaScript, das auf der Seite ausgeführt wird, oder ein "refresh"-Pragma im [meta](/de/docs/Web/HTML/Element/meta)-Tag der Seite.
- "server_redirect"
  - : Weiterleitung(en) verursacht durch einen [3XX HTTP-Statuscode](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection), der vom Server gesendet wird.
- "forward_back"
  - : Der Benutzer hat die Vorwärts- oder Rücktaste verwendet, um die Navigation auszulösen.
- "from_address_bar"
  - : Der Benutzer hat die Navigation aus der Adressleiste ausgelöst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#type-TransitionQualifier) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
