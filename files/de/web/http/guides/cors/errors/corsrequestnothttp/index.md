---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS request not HTTP
```

## Was ist schiefgelaufen?

{{Glossary("CORS", "CORS")}}-Anfragen dürfen nur das HTTP- oder HTTPS-URL-Schema verwenden, aber die von der Anfrage angegebene URL ist von einem anderen Typ. Dies tritt häufig auf, wenn die URL eine lokale Datei mit dem `file:///`-Schema angibt.

Um dieses Problem zu beheben, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anfragen durchführen, die CORS betreffen, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), Web Fonts (`@font-face`), und [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) sowie XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus demselben Verzeichnis und Unterverzeichnissen wurden historisch als vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) stammend betrachtet. Dies bedeutete, dass eine Datei und alle ihre Ressourcen während der Tests aus einem lokalen Verzeichnis oder Unterverzeichnis geladen werden konnten, ohne einen CORS-Fehler auszulösen.

Leider hatte dies sicherheitstechnische Auswirkungen, wie in dieser Beratung vermerkt: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730). Viele Browser, darunter Firefox und Chrome, behandeln jetzt alle lokalen Dateien standardmäßig als _opake Ursprünge_. Daher führt das Laden einer lokalen Datei mit eingeschlossenen lokalen Ressourcen jetzt zu CORS-Fehlern.

Entwickler, die lokale Tests durchführen müssen, sollten nun [einen lokalen Server einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Da alle Dateien vom gleichen Schema und Domain (`localhost`) bedient werden, haben sie denselben Ursprung und lösen keine Cross-Origin-Fehler aus.

> [!NOTE]
> Diese Änderung steht im Einklang mit der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Ursprungsverhalten für Dateien der Implementierung überlässt, aber empfiehlt, dass Dateiursprünge als opak behandelt werden, wenn Zweifel bestehen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
