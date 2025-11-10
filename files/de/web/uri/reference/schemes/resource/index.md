---
title: "resource: URLs"
short-title: "resource:"
slug: Web/URI/Reference/Schemes/resource
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{non-standard_header}}

Ressourcen-URLs, URLs mit dem Präfix `resource:`, werden von Firefox und Firefox-Browsererweiterungen verwendet, um intern Ressourcen zu laden, aber einige Informationen sind auch für Websites verfügbar, mit denen der Browser eine Verbindung herstellt.

## Syntax

```url
resource://<path>
```

- `resource:`
  - : Das Schema der URL.
- `<path>`
  - : Ein Pfad, der auf die Ressource zeigt, die Sie laden möchten.

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in der Ressourcen-URL gefunden werden ('->'), bedeutet das, dass die erste Datei die nächste geladen hat:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte beziehen Sie sich auf [die URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Ressourcen-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:` URLs geteilten Informationen für Websites verfügbar sind, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox untersuchen, einschließlich der Standardeinstellungen, was ein ernstes Sicherheits- und Datenschutzproblem darstellen könnte.

Zum Beispiel zeigt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls), was Firefox preisgibt, wenn es von einem auf der Seite laufenden Skript abgefragt wird (der Quellcode ist verfügbar unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übergibt Präferenznamen und Werte an die Funktion `pref()`. Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Websites können leicht die Standardpräferenzen von Firefox sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte von Präferenzen je nach Build-Konfigurationen, wie Plattform und Locale, was bedeutet, dass Websites einzelne Nutzer anhand dieser Informationen identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, änderte Mozilla das Verhalten des Ladens von `resource:` URLs im [Firefox-Bug 863246](https://bugzil.la/863246), das in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) implementiert wurde.

In der Vergangenheit konnte Webinhalt auf beliebige `resource:` URLs zugreifen — nicht nur auf interne Ressourcen von Firefox, sondern auch auf Assets von Erweiterungen. Dieses Verhalten ist nun standardmäßig verboten.

Es ist jedoch unter bestimmten Umständen weiterhin notwendig, dass Firefox Ressourcen im Webinhalt lädt. Wenn Sie zum Beispiel die Quelltextansicht (Seitenquelltext anzeigen oder Auswahlquelltext anzeigen) öffnen, werden Sie feststellen, dass es `viewsource.css` über eine `resource:` URL benötigt. Ressourcen, die im Webinhalt offengelegt werden müssen, wurden nun an einen neuen Ort namens `resource://content-accessible/` verschoben, der isoliert ist und nur nicht-sensitive Ressourcen enthält. Auf diese Weise können wir essentielle Ressourcen freigeben und die meisten Bedrohungen eliminieren.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler keine Ressourcen-URLs mehr verwenden. Ihre Nutzung war bestenfalls hacky, und die meisten Anwendungsfälle funktionieren nicht mehr.

## Spezifikationen

resource: ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

resource: ist nur in Firefox verfügbar.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` ist [hier abgedeckt](https://www.iana.org/assignments/uri-schemes/prov/resource))
