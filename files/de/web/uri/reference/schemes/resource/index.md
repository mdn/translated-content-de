---
title: "resource: URLs"
short-title: "resource:"
slug: Web/URI/Reference/Schemes/resource
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{non-standard_header}}

Ressourcen-URLs, URLs mit dem Präfix `resource:`-Schema, werden von Firefox und Firefox-Browser-Erweiterungen verwendet, um Ressourcen intern zu laden. Einige der Informationen sind jedoch auch für die Webseiten, mit denen der Browser verbunden ist, zugänglich.

## Syntax

Ressourcen-URLs bestehen aus zwei Teilen: einem Präfix (`resource:`) und einem Pfad, der auf die Ressource verweist, die Sie laden möchten:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in der Ressourcen-URL ('->') gefunden werden, bedeutet dies, dass die erste Datei die nächste lädt:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte lesen Sie [die URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Ressourcen-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:`-URLs geteilten Informationen Webseiten zur Verfügung stehen, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox untersuchen, einschließlich der Standard-Einstellungen. Dies könnte ein ernsthaftes Sicherheits- und Datenschutzproblem darstellen.

Zum Beispiel zeigt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls) auf, was Firefox bei einer Abfrage durch ein einfaches Skript auf der Seite preisgibt (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Namen und Werte von Einstellungen an die Funktion `pref()`. Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Webseiten können die Standard-Einstellungen von Firefox leicht sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte von Einstellungen zwischen Build-Konfigurationen wie Plattform und Spracheinstellung, wodurch Webseiten einzelne Benutzer anhand dieser Informationen identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, hat Mozilla das Verhalten beim Laden von `resource:`-URLs in [Firefox-Bug 863246](https://bugzil.la/863246) geändert, welcher in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) eingeführt wurde.

In der Vergangenheit konnte Web-Content auf beliebige `resource:`-URLs zugreifen — nicht nur auf interne Ressourcen von Firefox, sondern auch auf Assets von Erweiterungen. Dieses Verhalten ist nun standardmäßig verboten.

Es ist aber weiterhin notwendig, dass Firefox in bestimmten Umständen Ressourcen im Web-Content lädt. Wenn Sie beispielsweise die Seitenquellansicht öffnen (Seitenquelltext anzeigen oder Auswahlquelltext anzeigen), werden Sie feststellen, dass dafür `viewsource.css` über eine `resource:`-URL geladen wird. Ressourcen, die für Web-Content verfügbar sein müssen, wurden an einen neuen Speicherort namens `resource://content-accessible/` verschoben. Dieser ist isoliert und enthält nur nicht sensible Ressourcen. Auf diese Weise können wesentliche Ressourcen zugänglich bleiben, während die meisten Bedrohungen beseitigt werden.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler die Verwendung von Ressourcen-URLs einstellen. Ihre Verwendung war bestenfalls eine Umgehungslösung, und die meisten Verwendungen funktionieren nicht mehr.

## Spezifikationen

`resource:` ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

`resource:` ist nur in Firefox verfügbar.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` wird [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
