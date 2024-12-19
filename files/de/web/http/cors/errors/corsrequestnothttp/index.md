---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request not HTTP
```

## Was ist schiefgelaufen?

{{Glossary("CORS", "CORS")}}-Anfragen dürfen nur das URL-Schema HTTP oder HTTPS verwenden, aber die von der Anfrage angegebene URL ist von einem anderen Typ. Dies tritt häufig auf, wenn die URL eine lokale Datei mit dem `file:///`-Schema angibt.

Um dieses Problem zu beheben, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anfragen mit CORS durchführen, wie zum Beispiel bei [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), Web Fonts (`@font-face`) und [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) und XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus dem gleichen Verzeichnis und Unterverzeichnissen wurden historisch als von derselben [Herkunft](/de/docs/Web/Security/Same-origin_policy) stammend behandelt. Dies bedeutete, dass eine Datei und alle ihre Ressourcen während des Testens aus einem lokalen Verzeichnis oder Unterverzeichnis geladen werden konnten, ohne einen CORS-Fehler auszulösen.

Leider hatte dies Sicherheitsimplikationen, wie in diesem Hinweis angemerkt: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730). Viele Browser, einschließlich Firefox und Chrome, behandeln nun standardmäßig alle lokalen Dateien als _undurchsichtige Ursprünge_. Infolgedessen führt das Laden einer lokalen Datei mit eingeschlossenen lokalen Ressourcen jetzt zu CORS-Fehlern.

Entwickler, die lokale Tests durchführen müssen, sollten jetzt [einen lokalen Server einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Da alle Dateien vom selben Schema und von derselben Domain (`localhost`) bereitgestellt werden, haben alle dieselbe Herkunft und lösen keine Cross-Origin-Fehler aus.

> [!NOTE]
> Diese Änderung steht im Einklang mit der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Ursprungsverhalten für Dateien der Implementierung überlässt, aber empfiehlt, dass Dateiquellen als undurchsichtig behandelt werden, wenn Zweifel bestehen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
