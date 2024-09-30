---
title: Resource URLs
slug: Web/URI/Schemes/resource
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}{{non-standard_header}}

Resource-URLs, URLs mit dem Präfix `resource:`, werden von Firefox und Firefox-Browser-Erweiterungen verwendet, um Ressourcen intern zu laden. Einige der Informationen sind jedoch auch für Websites verfügbar, mit denen der Browser verbunden ist.

## Syntax

Resource-URLs setzen sich aus zwei Teilen zusammen: einem Präfix (`resource:`) und einem Pfad, der auf die zu ladende Ressource verweist:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in der Resource-URL gefunden werden ('->'), bedeutet es, dass die erste Datei die nächste geladen hat:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte beachten Sie [die URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Resource-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:`-URLs freigegebenen Informationen für Websites verfügbar sind, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox überprüfen, einschließlich der Standardeinstellungen, was ein ernstes Sicherheits- und Datenschutzproblem darstellen könnte.

Zum Beispiel hebt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls) hervor, was Firefox offenbart, wenn es durch ein einfaches Skript abgefragt wird, das auf der Seite ausgeführt wird (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und -werte an die Funktion pref(). Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können einfach Firefox-Standardeinstellungen sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte von Einstellungen je nach Build-Konfiguration, wie Plattform und Sprache, was bedeutet, dass Websites anhand dieser Informationen einzelne Benutzer identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, änderte Mozilla das Verhalten des Ladens von `resource:`-URLs im [Firefox-Bug 863246](https://bugzil.la/863246), der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) übernommen wurde.

In der Vergangenheit konnte Webinhalt auf beliebige `resource:`-URLs zugreifen — nicht nur auf Firefox-interne Ressourcen, sondern auch auf die Vermögenswerte von Erweiterungen. Jetzt ist dieses Verhalten standardmäßig verboten.

Es ist jedoch noch notwendig, dass Firefox unter bestimmten Umständen Ressourcen in Webinhalten lädt. Zum Beispiel, wenn Sie die Quelltextseite anzeigen (Seitenquellen anzeigen oder Auswahlquellen anzeigen), werden Sie feststellen, dass es `viewsource.css` über eine `resource:`-URL erfordert. Ressourcen, die dem Webinhalt zugänglich gemacht werden müssen, wurden an einen neuen Ort namens `resource://content-accessible/` verlegt, der isoliert ist und nur nicht-sensible Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen zugänglich halten und die meisten Bedrohungen eliminieren.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler keine Resource-URLs mehr verwenden. Ihre Nutzung war bestenfalls problematisch, und die meisten Anwendungen werden nicht mehr funktionieren.

## Spezifikationen

`resource:` ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

`resource:` ist nur in Firefox verfügbar.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` ist [hier abgedeckt](https://www.iana.org/assignments/uri-schemes/prov/resource))
