---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

## Grund

```plain
Reason: CORS request not HTTP
```

## Was ist schiefgelaufen?

{{Glossary("CORS", "CORS")}}-Anfragen dürfen nur das HTTP- oder HTTPS-URL-Schema verwenden, aber die von der Anfrage angegebene URL ist von einem anderen Typ. Dies tritt häufig auf, wenn die URL eine lokale Datei mit dem `file:///`-Schema angibt.

Um dieses Problem zu beheben, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anfragen durchführen, die CORS beinhalten, wie z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), Web Fonts (`@font-face`), und [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) sowie XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus demselben Verzeichnis und Unterverzeichnissen wurden historisch als von [gleicher Herkunft](/de/docs/Web/Security/Defenses/Same-origin_policy) betrachtet. Dies bedeutete, dass eine Datei und alle ihre Ressourcen während des Testens aus einem lokalen Verzeichnis oder Unterverzeichnis geladen werden konnten, ohne einen CORS-Fehler auszulösen.

Leider hatte dies Sicherheitsimplikationen, wie in diesem Hinweis vermerkt: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730). Viele Browser, darunter Firefox und Chrome, behandeln jetzt alle lokalen Dateien als _undurchsichtig herkunftsberichtig_ (standardmäßig). Infolgedessen führt das Laden einer lokalen Datei mit enthaltenen lokalen Ressourcen jetzt zu CORS-Fehlern.

Entwickler, die lokale Tests durchführen müssen, sollten jetzt [einen lokalen Server einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Da alle Dateien aus demselben Schema und derselben Domain (`localhost`) bereitgestellt werden, haben sie alle die gleiche Herkunft und lösen keine Cross-Origin-Fehler aus.

> [!NOTE]
> Diese Änderung steht im Einklang mit der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Verhalten der Herkunft von Dateien der Implementierung überlässt, aber empfiehlt, dass Dateiorigins als undurchsichtig behandelt werden, wenn Zweifel bestehen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS-Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
