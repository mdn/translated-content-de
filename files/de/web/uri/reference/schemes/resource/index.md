---
title: "resource: URLs"
short-title: "resource:"
slug: Web/URI/Reference/Schemes/resource
l10n:
  sourceCommit: d54f8c9ecfbafc35915330ac4e26a09d93d814e8
---

{{non-standard_header}}

Ressourcen-URLs, URLs mit dem Präfix `resource:`, werden von Firefox und Firefox-Browsererweiterungen verwendet, um Ressourcen intern zu laden. Einige Informationen sind jedoch auch für Websites, mit denen der Browser verbunden ist, verfügbar.

## Syntax

Ressourcen-URLs bestehen aus zwei Teilen: einem Präfix (`resource:`) und einem Pfad, der auf die zu ladende Ressource verweist:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in den Ressourcen-URLs ('->') gefunden werden, bedeutet dies, dass die erste Datei die nächste lädt:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte lesen Sie die [URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Ressourcen-URLs, die intern von Firefox verwendet werden, um auf eingebettete Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:` URLs freigegebenen Informationen Websites zur Verfügung stehen, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox inspizieren, einschließlich der Standardeinstellungen, was ein ernstes Sicherheits- und Datenschutzproblem darstellen könnte.

Zum Beispiel zeigt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls), was Firefox preisgibt, wenn es von einem Skript auf der Seite abgefragt wird (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und -werte an die Funktion `pref()`. Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können leicht die Standardpräferenzen von Firefox sammeln, indem sie diese `pref()` Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte von Präferenzen je nach Build-Konfigurationen, wie die Plattform und die Gebietsschema, was bedeutet, dass Websites mit diesen Informationen einzelne Benutzer identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, hat Mozilla das Verhalten beim Laden von `resource:` URLs im [Firefox-Bug 863246](https://bugzil.la/863246) geändert, der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) eingeführt wurde.

Früher konnte Webinhalt auf jede gewünschte `resource:` URL zugreifen – nicht nur auf die internen Ressourcen von Firefox, sondern auch auf die Assets von Erweiterungen. Jetzt ist dieses Verhalten standardmäßig verboten.

Es ist jedoch weiterhin notwendig, dass Firefox unter bestimmten Umständen Ressourcen im Webinhalt lädt. Beispielsweise, wenn Sie die Quelltextansicht (Seitenquelltext anzeigen oder Auswahldateiquelle anzeigen) öffnen, stellen Sie fest, dass dafür `viewsource.css` über eine `resource:` URL benötigt wird. Ressourcen, die dem Webinhalt zugänglich gemacht werden müssen, wurden an einen neuen Speicherort namens `resource://content-accessible/` verschoben, der isoliert ist und nur nicht sensible Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen freigegeben halten und die meisten Bedrohungen eliminieren.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler versuchen, keine Ressourcen-URLs mehr zu verwenden. Ihre Nutzung war im besten Fall problematisch, und die meisten Verwendungen werden nicht mehr funktionieren.

## Spezifikationen

resource: ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

resource: ist nur für Firefox.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` wird [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
