---
title: Resource-URLs
slug: Web/URI/Schemes/resource
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}{{non-standard_header}}

Resource-URLs, URLs mit dem Präfix `resource:`, werden von Firefox und Firefox-Erweiterungen verwendet, um Ressourcen intern zu laden. Einige Informationen sind jedoch auch für die Seiten verfügbar, mit denen der Browser eine Verbindung herstellt.

## Syntax

Resource-URLs bestehen aus zwei Teilen: einem Präfix (`resource:`) und einem Pfad, der auf die zu ladende Ressource verweist:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in der Resource-URL ('->') gefunden werden, bedeutet dies, dass die erste Datei die nächste geladen hat:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte beziehen Sie sich auf die [URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Resource-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:`-URLs geteilten Informationen Websites zur Verfügung stehen, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox inspizieren, einschließlich der Standardvoreinstellungen, was ein ernsthaftes Sicherheits- und Datenschutzproblem darstellen könnte.

Ein Beispiel: [Ein Skript auf Browserleaks](https://browserleaks.com/resource-urls) hebt hervor, was Firefox offenlegt, wenn es von einem einfachen Skript auf der Seite abgefragt wird (Sie finden den Code unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und -werte an die Funktion pref(). Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können leicht die Standardvoreinstellungen von Firefox sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte der Voreinstellungen zwischen verschiedenen Build-Konfigurationen, wie z. B. Plattform und Gebietsschema, was bedeutet, dass Websites einzelne Benutzer anhand dieser Informationen identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, änderte Mozilla das Verhalten beim Laden von `resource:`-URLs im [Firefox-Bug 863246](https://bugzil.la/863246), der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) implementiert wurde.

In der Vergangenheit konnte Webinhalt auf beliebige `resource:`-URLs zugreifen – nicht nur auf die internen Ressourcen von Firefox, sondern auch auf die Vermögenswerte von Erweiterungen. Jetzt ist dieses Verhalten standardmäßig untersagt.

Es ist jedoch immer noch notwendig, dass Firefox Ressourcen unter bestimmten Umständen in Webinhalten lädt. Zum Beispiel, wenn Sie die Quelltextanzeige öffnen (Seitenquelltext oder Auswahl-Quelltext anzeigen), werden Sie feststellen, dass `viewsource.css` über eine `resource:`-URL benötigt wird. Ressourcen, die dem Webinhalt zugänglich gemacht werden müssen, wurden an einen neuen Ort namens `resource://content-accessible/` verschoben, der isoliert ist und nur nicht sensible Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen zugänglich halten und die meisten Bedrohungen eliminieren.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler nicht mehr versuchen, Resource-URLs zu verwenden. Ihre Verwendung war bestenfalls ein Hack, und die meisten Verwendungen funktionieren nicht mehr.

## Spezifikationen

resource: ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

resource: ist nur in Firefox verfügbar.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` ist [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
