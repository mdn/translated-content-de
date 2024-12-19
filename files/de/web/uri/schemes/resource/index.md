---
title: Ressourcen-URLs
slug: Web/URI/Schemes/resource
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}{{non-standard_header}}

Ressourcen-URLs, URLs mit dem Präfix `resource:`, werden von Firefox und Firefox-Browsererweiterungen verwendet, um Ressourcen intern zu laden. Einige Informationen sind jedoch auch für Websites verfügbar, mit denen der Browser verbunden ist.

## Syntax

Ressourcen-URLs bestehen aus zwei Teilen: einem Präfix (`resource:`) und einem Pfad, der auf die Ressource zeigt, die Sie laden möchten:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn in der Ressourcen-URL Pfeile ('->') gefunden werden, bedeutet dies, dass die erste Datei die nächste geladen hat:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte beziehen Sie sich auf [die URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Ressourcen-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:` URLs geteilten Informationen für Websites verfügbar sind, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox inspizieren, einschließlich der Standardeinstellungen, was ein ernsthaftes Sicherheits- und Datenschutzproblem darstellen könnte.

Zum Beispiel hebt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls) hervor, was Firefox offenlegt, wenn es von einem einfachen Skript auf der Seite abgefragt wird (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und -werte an die `pref()`-Funktion. Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können Firefox-Standardeinstellungen leicht sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte von Präferenzen je nach Build-Konfigurationen wie Plattform und Sprache, was bedeutet, dass Websites einzelne Nutzer anhand dieser Informationen identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, änderte Mozilla das Verhalten beim Laden von `resource:` URLs im [Firefox-Bug 863246](https://bugzil.la/863246), der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) eingeführt wurde.

In der Vergangenheit konnte Webinhalte beliebige `resource:` URLs zugreifen — nicht nur die internen Ressourcen von Firefox, sondern auch die Assets von Erweiterungen. Dieses Verhalten ist nun standardmäßig verboten.

Es ist jedoch nach wie vor notwendig, dass Firefox unter bestimmten Umständen Ressourcen in Webinhalten lädt. Wenn Sie beispielsweise die Quellcodeansicht öffnen (Quelltext der Seite anzeigen oder Auswahlquelle anzeigen), werden Sie feststellen, dass dafür `viewsource.css` über eine `resource:` URL benötigt wird. Ressourcen, die für Webinhalte verfügbar sein müssen, wurden an einen neuen Ort namens `resource://content-accessible/` verschoben, der isoliert ist und nur nicht sensitive Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen offenhalten und die meisten Bedrohungen beseitigen.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler keine Ressourcen-URLs mehr verwenden. Ihre Nutzung war bestenfalls ein Hack, und die meisten Verwendungen werden nun nicht mehr funktionieren.

## Spezifikationen

`resource:` ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

`resource:` ist nur für Firefox verfügbar.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` wird [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
