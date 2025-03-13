---
title: "resource: URLs"
short-title: "resource:"
slug: Web/URI/Reference/Schemes/resource
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

{{non-standard_header}}

Resource-URLs, URLs, die mit dem `resource:`-Schema beginnen, werden von Firefox und Firefox-Browsererweiterungen verwendet, um Ressourcen intern zu laden. Einige Informationen sind jedoch auch für die von dem Browser verbundenen Seiten verfügbar.

## Syntax

Resource-URLs bestehen aus zwei Teilen: einem Präfix (`resource:`) und einem Pfad, der auf die gewünschte Ressource zeigt:

```url
resource://<path>
```

Ein Beispiel:

```url
resource://gre/res/svg.css
```

Wenn Pfeile in den Resource-URLs gefunden werden ('->'), bedeutet das, dass die erste Datei die nächste geladen hat:

```url
resource://<File-loader> -> <File-loaded>
```

Bitte lesen Sie die [URI-Referenz](/de/docs/Web/URI) für allgemeinere Details.

In diesem Artikel konzentrieren wir uns auf Resource-URLs, die intern von Firefox verwendet werden, um auf eingebaute Ressourcen zu verweisen.

## Bedrohungen

Da einige der von `resource:`-URLs bereitgestellten Informationen Webseiten zugänglich sind, könnte eine Webseite interne Skripte ausführen und interne Ressourcen von Firefox untersuchen, einschließlich der Standardeinstellungen, was ein ernstes Sicherheits- und Datenschutzproblem darstellen könnte.

Zum Beispiel zeigt [ein Skript auf Browserleaks](https://browserleaks.com/resource-urls), was Firefox offenlegt, wenn es von einem auf der Seite laufenden Skript abgefragt wird (den Code finden Sie unter <https://browserleaks.com/resource-urls#more>).

Die Datei firefox.js übermittelt Einstellungnamen und -werte an die Funktion pref(). Zum Beispiel:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Webseiten können Firefox-Standardeinstellungen leicht sammeln, indem sie diese `pref()`-Funktion überschreiben und das Skript `resource:///defaults/preferences/firefox.js` verwenden.

Darüber hinaus unterscheiden sich einige Standardwerte der Einstellungen zwischen verschiedenen Build-Konfigurationen, etwa Plattform und Lokalisierung, was bedeutet, dass Webseiten anhand dieser Informationen einzelne Benutzer identifizieren könnten.

## Lösung

Um dieses Problem zu beheben, änderte Mozilla das Verhalten beim Laden von `resource:`-URLs im [Firefox Fehler 863246](https://bugzil.la/863246), der in [Firefox 57 (Quantum)](/de/docs/Mozilla/Firefox/Releases/57) eingeführt wurde.

In der Vergangenheit konnte Webinhalt auf beliebige `resource:`-URLs zugreifen – nicht nur auf Firefoxt interne Ressourcen, sondern auch auf die Assets der Erweiterungen. Jetzt ist dieses Verhalten standardmäßig verboten.

Es ist jedoch weiterhin notwendig, dass Firefox Ressourcen in Webinhalten unter bestimmten Umständen lädt. Wenn Sie zum Beispiel die Seitenquellansicht öffnen (Seitenquelltext anzeigen oder Auswahlquelltext anzeigen), werden Sie feststellen, dass `viewsource.css` durch eine `resource:`-URL benötigt wird. Ressourcen, die auf Webinhalte zugänglich gemacht werden müssen, wurden an einen neuen Ort namens `resource://content-accessible/` verlegt, der isoliert ist und nur nicht-sensible Ressourcen enthält. Auf diese Weise können wir wesentliche Ressourcen weiterhin zugänglich halten und die meisten Bedrohungen eliminieren.

> [!NOTE]
> Es wird empfohlen, dass Web- und Erweiterungsentwickler nicht mehr versuchen sollen, Resource-URLs zu verwenden. Ihre Verwendung war bestenfalls fragwürdig, und die meisten Verwendungen werden nicht mehr funktionieren.

## Spezifikationen

resource: ist in keiner Spezifikation definiert.

## Browser-Kompatibilität

resource: ist nur in Firefox.

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemen](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` wird [hier behandelt](https://www.iana.org/assignments/uri-schemes/prov/resource))
