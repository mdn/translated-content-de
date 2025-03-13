---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request not HTTP
```

## Was ist schiefgelaufen?

{{Glossary("CORS", "CORS")}}-Anfragen dürfen nur das HTTP- oder HTTPS-URL-Schema verwenden, aber die URL, die in der Anfrage angegeben ist, hat einen anderen Typ. Dies tritt häufig auf, wenn die URL eine lokale Datei angibt, die das `file:///`-Schema verwendet.

Um dieses Problem zu beheben, stellen Sie sicher, dass Sie HTTPS-URLs verwenden, wenn Sie Anfragen mit CORS durchführen, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), Web Fonts (`@font-face`) und [WebGL Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) sowie XSL-Stylesheets.

### Laden einer lokalen Datei

Lokale Dateien aus demselben Verzeichnis und Unterverzeichnissen wurden historisch als vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) stammend behandelt. Dies bedeutete, dass eine Datei und alle ihre Ressourcen während des Testens ohne Auslösen eines CORS-Fehlers aus einem lokalen Verzeichnis oder Unterverzeichnis geladen werden konnten.

Leider hatte dies Sicherheitsimplikationen, wie in diesem Hinweis beschrieben: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730). Viele Browser, einschließlich Firefox und Chrome, behandeln jetzt alle lokalen Dateien standardmäßig als _undurchsichtige Ursprünge_. Infolgedessen führt das Laden einer lokalen Datei mit eingeschlossenen lokalen Ressourcen jetzt zu CORS-Fehlern.

Entwickler, die lokale Tests durchführen müssen, sollten nun [einen lokalen Server einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Da alle Dateien vom selben Schema und derselben Domain (`localhost`) bereitgestellt werden, haben sie alle denselben Ursprung und lösen keine Fehler für ursprungsübergreifende Anforderungen aus.

> [!NOTE]
> Diese Änderung steht im Einklang mit der [URL-Spezifikation](https://url.spec.whatwg.org/#origin), die das Ursprungsverhalten für Dateien der Implementierung überlässt, aber empfiehlt, dass Datei-Ursprünge als undurchsichtig behandelt werden, wenn Zweifel bestehen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
