---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request not HTTP
```

## Was ist schiefgelaufen?

{{Glossary("CORS", "CORS")}}-Anfragen dürfen nur das HTTP- oder HTTPS-URL-Schema verwenden, aber die durch die Anfrage angegebene URL ist von einem anderen Typ. Dies tritt häufig auf, wenn die URL eine lokale Datei mit dem `file:///`-Schema angibt.

Um dieses Problem zu beheben, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anfragen mit CORS ausführen, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), Web Fonts (`@font-face`) und [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) sowie XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus demselben Verzeichnis und Unterverzeichnissen wurden historisch als von derselben [Ursprung](/de/docs/Web/Security/Same-origin_policy) angesehen. Dies bedeutete, dass eine Datei und alle ihre Ressourcen während Tests aus einem lokalen Verzeichnis oder Unterverzeichnis geladen werden konnten, ohne einen CORS-Fehler auszulösen.

Leider hatte dies Sicherheitsimplikationen, wie in diesem Hinweis festgestellt: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730). Viele Browser, einschließlich Firefox und Chrome, behandeln jetzt alle lokalen Dateien als _undurchsichtige Ursprünge_ (standardmäßig). Infolgedessen führt das Laden einer lokalen Datei mit enthaltenen lokalen Ressourcen nun zu CORS-Fehlern.

Entwickler, die lokale Tests durchführen müssen, sollten jetzt [einen lokalen Server einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server). Da alle Dateien vom selben Schema und derselben Domain (`localhost`) bereitgestellt werden, haben sie alle denselben Ursprung und lösen keine Cross-Origin-Fehler aus.

> [!NOTE]
> Diese Änderung entspricht der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Verhalten von Ursprüngen für Dateien offengelassen, aber empfiehlt, dass Dateianfänge als undurchsichtig behandelt werden, wenn Zweifel bestehen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
