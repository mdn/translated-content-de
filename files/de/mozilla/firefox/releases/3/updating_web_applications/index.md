---
title: Aktualisierung von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die Ihre Website oder Webanwendung betreffen könnten, sowie neue Funktionen, die Sie nutzen möchten. Dieser Artikel dient als Ausgangspunkt, um Ihre Inhalte zu aktualisieren und die Möglichkeiten von Firefox 3 bestmöglich zu nutzen.

## Änderungen im DOM

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie im [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde dies eine Weile lang getan, aber zu viele Websites wurden dadurch unterbrochen). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

## Änderungen in HTML

### Änderungen an der Vererbung von Zeichensätzen

Firefox 3 behebt einen Sicherheitsfehler in Frames und iframes, der es ihnen ermöglichte, den Zeichensatz des übergeordneten Dokuments zu erben. Dies könnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen Frames nur noch den Zeichensatz des übergeordneten Dokuments erben, wenn sowohl der Frame als auch das übergeordnete Dokument vom selben Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass Frames, die von anderen Servern geladen werden, den gleichen Zeichensatz erben, sollten Sie das HTML der Frames aktualisieren, um ihren Zeichensatz spezifisch anzugeben.

### Änderung im `<script>` Element

Das `<script>` Element in `text/html` Dokumenten erfordert jetzt ein schließendes `</script>` in HTML 4 Dokumenten, selbst wenn Sie keinen Inhalt dazwischen einfügen. Während Sie in früheren Versionen von Firefox dies tun konnten:

```html
<script … />
```

Muss das Markup nun tatsächlich den HTML-Spezifikationen entsprechen (sofern es sich wirklich um HTML handelt), und daher müssen Sie es tatsächlich schließen, wie folgt:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## Änderungen in CSS

### Änderungen der Schriftgröße basierend auf em, ex Einheiten

Schriftgrößenwerte in em und ex Einheiten wurden von den Mindestschriftgrößeinstellungen des Benutzers beeinflusst: Wenn eine Schrift aufgrund der Mindestschriftgröße größer dargestellt wurde, wurden die em und ex Einheiten für Schriftgrößeneinstellungen, die auf dieser Schrift basierten, entsprechend vergrößert. Dies war inkonsistent mit der Art und Weise, wie prozentbasierte Schriftgrößen sich verhielten.

Schriftgrößenwerte in em und ex Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße", die nicht von der Mindestschriftgröße des Benutzers beeinflusst wird. Mit anderen Worten, Schriftgrößen werden immer nach der Intention des Designers berechnet und anschließend für die Mindestschriftgröße angepasst.

Sehen Sie dazu [Firefox Bug 434718](https://bugzil.la/434718), insbesondere sein NOT A CASE FOR THE BUG TEMPLATE - Der folgende Link verweist auf einen Bugzilla-Anhang, nicht auf einen Bugzilla-Bug; wenn Sie die Anhangsnummer als Bugnummer verwenden, ergibt das keinen Sinn [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) NOT A CASE FOR THE BUG TEMPLATE für eine Demonstration (muss mit einer Mindestschriftgröße >= 6 betrachtet werden, um den Unterschied zu sehen: die beiden Boxen-Kaskaden verhalten sich in Firefox 2 unterschiedlich, weil die auf em-basierte Schriftgröße von der Mindestschriftgröße "abprallt").

## Sicherheitsänderungen

### Chrome-Zugriff

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder aus Chrome mithilfe des `chrome://` Protokolls laden. Unter anderem machte dies es möglich, die Anwesenheit von Add-ons zu erkennen — was verwendet werden konnte, um die Sicherheit eines Benutzers zu gefährden, indem Add-ons umgangen werden, die dem Browser Sicherheitsfunktionen hinzufügen.

Firefox 3 ermöglicht Webinhalten nur den Zugriff auf Elemente in den `chrome://browser/` und `chrome://toolkit/` Bereichen. Diese Dateien sollen von Webinhalten zugänglich sein. Auf alle anderen Chrome-Inhalte ist jetzt der Zugriff durch das Web blockiert.

Es gibt jedoch eine Möglichkeit für Erweiterungen, ihre Inhalte webzugänglich zu machen. Sie können in ihrer `chrome.manifest` Datei eine spezielle Markierung angeben, wie folgt:

```plain
content my-package location/ contentaccessible=yes
```

Dies sollte nicht etwas sein, das Sie oft tun müssen, aber es ist für jene seltenen Fälle verfügbar, in denen es erforderlich ist. Beachten Sie, dass Firefox den Benutzer möglicherweise darauf hinweist, dass Ihre Erweiterung die `contentaccessible` Markierung auf diese Weise verwendet, da dies ein potenzielles Sicherheitsrisiko darstellt.

> [!NOTE]
> Da Firefox 2 die `contentaccessible` Markierung nicht versteht (es wird die gesamte Zeile mit der Markierung ignoriert), sollten Sie, wenn Sie Ihr Add-on sowohl mit Firefox 2 als auch mit Firefox 3 kompatibel machen möchten, etwas wie das Folgende tun:
>
> ```bash
> content my-package location/
> content my-package location/ contentaccessible=yes
>
> ```

### Datei-Upload-Felder

In früheren Versionen von Firefox gab es Fälle, in denen beim Hochladen einer Datei der gesamte Pfad der Datei der Webanwendung zur Verfügung stand. Dieses Datenschutzproblem wurde in Firefox 3 behoben; jetzt ist nur noch der Dateiname selbst für die Webanwendung verfügbar.

### Verwendung von Remote-JARs in Frames

Die Verwendung von Code in JAR-Dateien, die von anderen Domains geladen wurden, ist in Frames nicht mehr erlaubt; dies reduziert ein [potenzielles Angriffsvektor](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen der Same-Origin-Richtlinie für file: URIs

Die Same-Origin-Richtlinie für file: URIs hat sich in Firefox 3 geändert. Dies kann sich auf Ihre Inhalte auswirken; bitte lesen Sie [Same-Origin-Richtlinie für file: URIs](/de/docs/Web/Security/Same-origin_policy#file_origins) für Details.

## Änderungen in JavaScript

Firefox 3 unterstützt [JavaScript 1.8](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8). Eine wichtige Änderung, die möglicherweise Aktualisierungen Ihrer Website oder Anwendung erfordert, ist, dass das veraltete und nicht standardisierte `Script` Objekt nicht mehr unterstützt wird. Dies ist nicht der `<script>` Tag, sondern ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie dies jemals verwendet haben, also sind Sie wahrscheinlich in Ordnung.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neu in JavaScript 1.8](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8)
- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
