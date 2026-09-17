---
title: "resource: URLs"
short-title: "resource:"
slug: Web/URI/Reference/Schemes/resource
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{non-standard_header}}

Resource-URLs, URLs mit dem Präfix des `resource:`-Schemas, werden von Firefox und Firefox-Browsererweiterungen verwendet, um Ressourcen intern zu laden. Einige der Informationen sind jedoch auch für Websites verfügbar, mit denen der Browser eine Verbindung herstellt.

## Syntax

```url
resource://<path>
```

- `resource:`
  - : Das Schema der URL.
- `<path>`
  - : Ein Pfad, der auf die Ressource verweist, die Sie laden möchten.

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in der Resource-URL (`->`) vorkommen, bedeutet dies, dass die erste Datei die nächste geladen hat:

```url
resource://<File-loader> -> <File-loaded>
```

Weitere allgemeine Details finden Sie in [der URI-Referenz](/de/docs/Web/URI).

In diesem Artikel konzentrieren wir uns auf Resource-URLs, die von Firefox intern verwendet werden, um auf integrierte Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:`-URLs bereitgestellten Informationen für Websites verfügbar sind, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox untersuchen, einschließlich der Standardpräferenzen. Dies könnte ein schwerwiegendes Sicherheits- und Datenschutzproblem darstellen.

Zum Beispiel zeigt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls), was Firefox offenlegt, wenn es durch ein auf der Website ausgeführtes Skript abgefragt wird (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und -werte an die Funktion pref(). Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können die Firefox-Standardpräferenzen leicht erfassen, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte von Präferenzen zwischen Build-Konfigurationen, etwa Plattform und Gebietsschema. Das bedeutet, dass Websites einzelne Benutzer anhand dieser Informationen identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, änderte Mozilla das Verhalten beim Laden von `resource:`-URLs in [Firefox-Bug 863246](https://bugzil.la/863246), der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) eingeführt wurde.

Früher konnten Webinhalte auf beliebige gewünschte `resource:`-URLs zugreifen — nicht nur auf die internen Ressourcen von Firefox, sondern auch auf Assets von Erweiterungen. Dieses Verhalten ist jetzt standardmäßig verboten.

Unter bestimmten Umständen muss Firefox jedoch weiterhin Ressourcen in Webinhalten laden. Wenn Sie beispielsweise die Quelltextansicht öffnen (View Page Source oder View Selection Source), werden Sie feststellen, dass sie `viewsource.css` über eine `resource:`-URL benötigt. Ressourcen, die Webinhalten zugänglich gemacht werden müssen, wurden an einen neuen Ort namens `resource://content-accessible/` verschoben, der isoliert ist und nur nicht sensible Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen weiterhin verfügbar machen und die meisten Bedrohungen beseitigen.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler nicht mehr versuchen, Resource-URLs zu verwenden. Ihre Verwendung war bestenfalls ein Hack, und die meisten Anwendungsfälle funktionieren nicht mehr.

## Spezifikationen

resource: ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

resource: ist nur in Firefox verfügbar.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes) (`resource:` wird [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
