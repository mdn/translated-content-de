---
title: Aktualisieren von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die Ihre Website oder Webanwendung betreffen können, sowie neue Funktionen, die Sie nutzen möchten. Dieser Artikel dient als Ausgangspunkt, während Sie daran arbeiten, Ihre Inhalte zu aktualisieren, um die Vorteile von Firefox 3 bestmöglich zu nutzen.

## DOM-Änderungen

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) kopiert (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde sie eine Zeit lang durchgesetzt, aber zu viele Websites brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

## HTML-Änderungen

### Änderungen am Zeichensatz-Erbe

Firefox 3 schließt einen Sicherheitsfehler in frames und iframes, der es ihnen erlaubte, den Zeichensatz des Elternteils zu erben. Dies könnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen frames den Zeichensatz des Elternteils nur erben, wenn sowohl frame als auch Elternteil vom selben Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass Frames von anderen Servern denselben Zeichensatz erben, sollten Sie das HTML der Frames aktualisieren, um ihren Zeichensatz explizit anzugeben.

### Änderung am SCRIPT-Element

Das `<script>`-Element in `text/html`-Dokumenten erfordert jetzt ein schließendes `</script>` in HTML 4-Dokumenten, auch wenn Sie keinen Inhalt dazwischen einfügen. Während Sie in früheren Versionen von Firefox Folgendes tun konnten:

```html
<script … />
```

Muss das Markup jetzt den HTML-Spezifikationen entsprechen (wenn es tatsächlich HTML ist), und daher müssen Sie es tatsächlich schließen, so:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## CSS-Änderungen

### Änderung der Schriftgröße basierend auf em, ex Einheiten

Schriftgrößenwerte in em und ex Einheiten wurden früher durch die minimale Schriftgröße des Benutzers beeinflusst: Wenn eine Schrift größer angezeigt wurde, aufgrund der minimalen Schriftgröße, wurden die em- und ex-Einheiten für Schriftgrößeneinstellungen basierend auf dieser entsprechend vergrößert. Dies war inkonsistent mit der Art und Weise, wie prozentuale Schriftgrößen funktionieren.

Schriftgrößenwerte in em und ex Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße", die nicht durch die minimale Schriftgröße des Benutzers beeinflusst wird. Mit anderen Worten, die Schriftgrößen werden immer nach der Absicht des Designers berechnet und danach für die minimale Schriftgröße angepasst.

Siehe [Firefox Fehler 434718](https://bugzil.la/434718), besonders das NICHT EIN FALL FÜR DIE BUG-VORLAGE - Der folgende Link verweist auf einen Bugzilla-Anhang, nicht auf einen Bugzilla-Bug; wenn Sie die Anhangsnummer als Bug-Nummer verwenden, wird es unsinnig [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) NICHT EIN FALL FÜR DIE BUG-VORLAGE für eine Demonstration (muss mit einer minimalen Schriftgröße >= 6 angesehen werden, um den Unterschied zu sehen: die beiden Boxenverhalte sich unterschiedlich in Firefox 2, weil die auf em-basierte Schriftgröße "abprallt" von der minimalen Schriftgröße).

## Sicherheitsänderungen

### Chrome-Zugriff

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder aus dem Chrome unter Verwendung des `chrome://`-Protokolls laden. Unter anderem ermöglichte dies Websites, das Vorhandensein von Add-ons zu erkennen — was genutzt werden konnte, um die Sicherheit eines Benutzers zu gefährden, indem Add-ons umgangen wurden, die Sicherheitsfunktionen zum Browser hinzufügen.

Firefox 3 erlaubt es Webinhalten nur, auf Elemente in den Bereichen `chrome://browser/` und `chrome://toolkit/` zuzugreifen. Diese Dateien sollen für Webinhalte zugänglich sein. Alle anderen Chrome-Inhalte sind jetzt für den Zugriff durch das Web gesperrt.

Es gibt jedoch eine Möglichkeit für Erweiterungen, ihre Inhalte webzugänglich zu machen. Sie können eine spezielle Flagge in ihrer `chrome.manifest`-Datei angeben, so:

```plain
content my-package location/ contentaccessible=yes
```

Dies sollte nicht oft erforderlich sein, aber es steht für jene seltenen Fälle zur Verfügung, in denen es nötig ist. Beachten Sie, dass Firefox den Benutzer möglicherweise darauf hinweist, dass Ihre Erweiterung die `contentaccessible`-Flagge auf diese Weise verwendet, da diese ein mögliches Sicherheitsrisiko darstellt.

> [!NOTE]
> Da Firefox 2 die `contentaccessible`-Flagge nicht versteht (die gesamte Zeile, die die Flagge enthält, wird ignoriert), sollten Sie Folgendes tun, wenn Ihr Add-on mit sowohl Firefox 2 als auch Firefox 3 kompatibel sein soll:
>
> ```bash
> content my-package location/
> content my-package location/ contentaccessible=yes
>
> ```

### Datei-Upload-Felder

In früheren Versionen von Firefox gab es Fälle, in denen beim Hochladen einer Datei der gesamte Pfad der Datei für die Webanwendung verfügbar war. Dieses Datenschutzproblem wurde in Firefox 3 behoben; jetzt ist nur der Dateiname selbst für die Webanwendung verfügbar.

### Verwendung von entfernten JARs in Frames

Die Verwendung von Code in JAR-Dateien, die von anderen Domänen geladen werden, ist in Frames nicht mehr erlaubt; dies mindert eine [potenzielle Angriffsmethode](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen an der Same-Origin-Policy für file: URIs

Die Same-Origin-Policy für file: URIs hat sich in Firefox 3 geändert. Dies könnte Ihre Inhalte beeinflussen; bitte lesen Sie [Same-Origin-Policy für file: URIs](/de/docs/Web/Security/Same-origin_policy#file_origins) für Details.

## JavaScript-Änderungen

Firefox 3 unterstützt [JavaScript 1.8](/de/docs/New_in_JavaScript_1.8). Eine wichtige Änderung, die möglicherweise Updates an Ihrer Website oder Anwendung erfordert, ist, dass das veraltete und nicht standardisierte `Script`-Objekt nicht mehr unterstützt wird. Dabei handelt es sich nicht um das `<script>`-Tag, sondern um ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie es jemals verwendet haben, daher sind Sie wahrscheinlich in Ordnung.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neu in JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
- [Erweiterungen für Firefox 3 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
