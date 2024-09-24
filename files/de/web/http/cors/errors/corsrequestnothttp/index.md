---
title: "Grund: CORS-Anforderung nicht HTTP"
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

{{Glossary("CORS")}}-Anfragen dürfen nur das HTTP- oder HTTPS-URL-Schema verwenden, aber die vom Anforderungsspezifizierte URL ist von einem anderen Typ. Dies tritt häufig auf, wenn die URL eine lokale Datei angibt und das `file:///`-Schema verwendet.

Um dieses Problem zu beheben, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anforderungen im Zusammenhang mit CORS stellen, wie z.B. {{domxref("Window/fetch", "fetch()")}}, {{domxref("XMLHttpRequest")}}, Web Fonts (`@font-face`) und [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) und XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus demselben Verzeichnis und Unterverzeichnissen wurden historisch als aus demselben [Ursprung](/de/docs/Web/Security/Same-origin_policy) stammend behandelt. Das bedeutete, dass eine Datei und alle ihre Ressourcen aus einem lokalen Verzeichnis oder Unterverzeichnis während des Testens geladen werden konnten, ohne einen CORS-Fehler auszulösen.

Leider hatte dies sicherheitsrelevante Auswirkungen, wie in diesem Hinweis vermerkt: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730). Viele Browser, darunter Firefox und Chrome, behandeln jetzt alle lokalen Dateien als _undurchsichtige Ursprünge_ (standardmäßig). Infolgedessen resultiert das Laden einer lokalen Datei mit enthaltenen lokalen Ressourcen jetzt in CORS-Fehlern.

Entwickler, die lokale Tests durchführen müssen, sollten jetzt [einen lokalen Server einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server). Da alle Dateien vom selben Schema und derselben Domain (`localhost`) bedient werden, haben sie alle denselben Ursprung und lösen keine Cross-Origin-Fehler aus.

> [!NOTE]
> Diese Änderung entspricht der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Ursprungsverhalten für Dateien der Implementierung überlässt, aber empfiehlt, dass Dateiuhrprünge im Zweifel als undurchsichtig behandelt werden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
