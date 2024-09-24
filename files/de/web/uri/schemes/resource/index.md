---
title: Ressourcen-URLs
slug: Web/URI/Schemes/resource
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}{{non-standard_header}}

Ressourcen-URLs, URLs mit dem Präfix `resource:`, werden von Firefox und Firefox-Browsererweiterungen verwendet, um Ressourcen intern zu laden. Einige Informationen sind jedoch auch für Websites verfügbar, mit denen der Browser verbunden ist.

## Syntax

Ressourcen-URLs setzen sich aus zwei Teilen zusammen: einem Präfix (`resource:`) und einem Pfad, der auf die Ressource zeigt, die Sie laden möchten:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn in der Ressourcen-URL Pfeile ('->') gefunden werden, bedeutet dies, dass die erste Datei die nächste geladen hat:

```url
resource://<Datei-Lader> -> <Datei-geladen>
```

Bitte beziehen Sie sich auf [die URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Ressourcen-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige Informationen, die von `resource:` URLs geteilt werden, für Websites verfügbar sind, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox inspizieren, einschließlich der Standardeinstellungen, was ein ernsthaftes Sicherheits- und Datenschutzproblem darstellen könnte.

Zum Beispiel hebt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls) hervor, was Firefox offenbart, wenn es von einem einfachen Skript auf der Seite abgefragt wird (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und -werte an die Funktion pref(). Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können leicht die Standardeinstellungen von Firefox sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte der Einstellungen je nach Build-Konfiguration, wie Plattform und Locale, was bedeutet, dass Websites einzelne Benutzer anhand dieser Informationen identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, hat Mozilla das Verhalten beim Laden von `resource:` URLs im [Firefox-Bug 863246](https://bugzil.la/863246) geändert, der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) eingeführt wurde.

Früher konnte Webcontent auf beliebige `resource:` URLs zugreifen — nicht nur auf die internen Ressourcen von Firefox, sondern auch auf die Assets von Erweiterungen. Dieses Verhalten ist nun standardmäßig verboten.

Es ist jedoch weiterhin notwendig, dass Firefox in bestimmten Situationen Ressourcen im Webcontent lädt. Wenn Sie zum Beispiel die Quelltextansicht öffnen (Quelltext der Seite anzeigen oder Auswahlquelle anzeigen), werden Sie feststellen, dass `viewsource.css` über eine `resource:` URL erforderlich ist. Ressourcen, die für Webcontent zugänglich sein müssen, wurden an einen neuen Ort namens `resource://content-accessible/` verlegt, der isoliert ist und nur nicht sensible Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen weiterhin zugänglich halten und die meisten Bedrohungen eliminieren.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler keine Ressourcen-URLs mehr verwenden. Ihre Verwendung war bestenfalls unsauber und die meisten Nutzungen funktionieren nicht mehr.

## Spezifikationen

resource: ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

resource: ist nur für Firefox.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` wird [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
