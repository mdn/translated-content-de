---
title: "Reason: CORS-Anfrage nicht HTTP"
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

{{Glossary("CORS", "CORS")}}-Anfragen dürfen nur das HTTP- oder HTTPS-URL-Schema verwenden, aber die durch die Anfrage angegebene URL ist von einem anderen Typ.
Dies tritt häufig auf, wenn die URL eine lokale Datei mit dem `file:///`-Schema angibt.

Um dieses Problem zu lösen, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anfragen stellen, die CORS betreffen, wie [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), Web Fonts (`@font-face`), und [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), und XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus demselben Verzeichnis und Unterverzeichnissen wurden historisch als vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) betrachtet.
Das bedeutete, dass eine Datei und alle ihre Ressourcen während des Testens aus einem lokalen Verzeichnis oder Unterverzeichnis geladen werden konnten, ohne einen CORS-Fehler auszulösen.

Leider hatte dies Sicherheitsimplikationen, wie in diesem Hinweis vermerkt: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730).
Viele Browser, einschließlich Firefox und Chrome, behandeln jetzt alle lokalen Dateien als _opake Ursprünge_ (standardmäßig).
Infolgedessen führt das Laden einer lokalen Datei mit eingeschlossenen lokalen Ressourcen nun zu CORS-Fehlern.

Entwicklern, die lokale Tests durchführen müssen, wird nun empfohlen, [einen lokalen Server einzurichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).
Da alle Dateien vom selben Schema und Domain (`localhost`) bereitgestellt werden, haben sie alle denselben Ursprung und lösen keine cross-origin Fehler aus.

> [!NOTE]
> Diese Änderung steht im Einklang mit der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Ursprungsverhalten für Dateien der Implementierung überlässt, aber empfiehlt, dass Dateiorsprünge im Zweifel als opak behandelt werden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
