---
title: Aktualisieren von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die Ihre Website oder Webanwendung betreffen könnten, sowie neue Funktionen, die Sie nutzen möchten. Dieser Artikel dient als Ausgangspunkt, während Sie daran arbeiten, Ihre Inhalte zu aktualisieren, um den größtmöglichen Vorteil aus Firefox 3 zu ziehen.

## DOM-Änderungen

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Für mehr Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument), siehe die [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es tat dies eine Weile während der Entwicklung von Firefox 3, aber zu viele Websites brechen, wenn diese Regel erzwungen wird). Wir empfehlen Webentwicklern, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

## HTML-Änderungen

### Änderungen bei der Zeichensatzvererbung

Firefox 3 schließt einen Sicherheitsfehler in Frames und Iframes, der es ihnen erlaubte, den Zeichensatz des übergeordneten Elements zu erben. Dies könnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen Frames den Zeichensatz des übergeordneten Elements nur erben, wenn sowohl der Frame als auch das übergeordnete Element vom gleichen Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass Frames, die von anderen Servern geladen wurden, den gleichen Zeichensatz erben, sollten Sie das HTML der Frames aktualisieren, um ihren Zeichensatz explizit anzugeben.

### Änderung des SCRIPT-Elements

Das `<script>`-Element in `text/html`-Dokumenten erfordert nun ein abschließendes `</script>` in HTML 4-Dokumenten, selbst wenn Sie keinen Inhalt dazwischen einfügen. Während Sie in früheren Versionen von Firefox dies tun konnten:

```html
<script … />
```

Muss jetzt das Markup mit den HTML-Spezifikationen übereinstimmen (wenn es sich tatsächlich um HTML handelt) und daher müssen Sie es tatsächlich schließen, so:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## CSS-Änderungen

### Änderung der Schriftgröße basierend auf em- und ex-Einheiten

Schriftgrößenwerte in em- und ex-Einheiten wurden früher durch die Mindestschriftgrößeinstellung des Benutzers beeinflusst: Wenn eine Schrift durch die Mindestschriftgröße größer angezeigt wurde, wurden die em- und ex-Einheiten für die Schriftgrößeneinstellungen basierend auf dieser entsprechend vergrößert. Dies war inkonsistent mit der Art und Weise, wie prozentuale Schriftgrößen sich verhielten.

Schriftgrößenwerte in em- und ex-Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße", die nicht von der Mindestschriftgröße des Benutzers beeinflusst wird. Mit anderen Worten, Schriftgrößen werden immer nach der Absicht des Designers berechnet und werden anschließend an die Mindestschriftgröße angepasst.

Siehe [Firefox-Bug 434718](https://bugzil.la/434718), insbesondere seinen HINWEIS ZUM FEHLER-VORLAGENTEXT - Der folgende Link verweist auf einen Bugzilla-Anhang, nicht auf einen Bugzilla-Fehler; wenn Sie die Anhangsnummer als Fehlernummer verwenden, wird es sinnlos [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) HINWEIS ZUM FEHLER-VORLAGENTEXT für eine Demonstration (muss mit einer Mindestschriftgröße >= 6 angesehen werden, um den Unterschied zu sehen: die beiden Box-Kaskaden verhalten sich in Firefox 2 unterschiedlich, da die auf em basierende Schriftgröße "abprallt" von der Mindestschriftgröße).

## Sicherheitsänderungen

### Chrome-Zugriff

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder aus dem Chrome mittels des `chrome://`-Protokolls laden. Unter anderem machte dies es möglich, das Vorhandensein von Add-ons zu erkennen — was genutzt werden konnte, um die Sicherheit eines Nutzers zu gefährden, indem Add-ons umgangen werden, die dem Browser Sicherheitsfunktionen hinzufügen.

Firefox 3 erlaubt Webinhalten nur den Zugriff auf Elemente in den Bereichen `chrome://browser/` und `chrome://toolkit/`. Diese Dateien sollen von Webinhalten zugänglich sein. Alle anderen Chrome-Inhalte sind nun vom Zugriff durch das Web blockiert.

Es gibt jedoch eine Möglichkeit für Erweiterungen, ihre Inhalte webzugänglich zu machen. Sie können ein spezielles Flag in ihrer `chrome.manifest`-Datei angeben, so:

```plain
content my-package location/ contentaccessible=yes
```

Dies sollte nicht etwas sein, das Sie sehr oft tun müssen, aber es ist für jene seltenen Fälle verfügbar, in denen es nötig ist. Beachten Sie, dass es möglich ist, dass Firefox den Benutzer darauf hinweist, dass Ihre Erweiterung das `contentaccessible`-Flag in dieser Weise verwendet, da es ein potenzielles Sicherheitsrisiko darstellt.

> [!NOTE]
> Weil Firefox 2 das `contentaccessible`-Flag nicht versteht (es wird die gesamte Zeile mit dem Flag ignorieren), sollten Sie, wenn Ihr Add-on sowohl mit Firefox 2 als auch mit Firefox 3 kompatibel sein soll, etwas wie folgt tun:
>
> ```bash
> content my-package location/
> content my-package location/ contentaccessible=yes
>
> ```

### Datei-Upload-Felder

In früheren Versionen von Firefox gab es Fälle, in denen beim Hochladen einer Datei der gesamte Pfad der Datei für die Webanwendung verfügbar war. Dieses Datenschutzproblem wurde in Firefox 3 behoben; jetzt ist nur noch der Dateiname selbst für die Webanwendung verfügbar.

### Verwenden von Remote-JARs in Frames

Das Verwenden von Code in JAR-Dateien, die von anderen Domains geladen werden, ist in Frames nicht mehr erlaubt; dies mindert einen [potenziellen Angriffsvektor](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen an der Same-Origin-Policy für file:-URIs

Die Same-Origin-Policy für file:-URIs hat sich in Firefox 3 geändert. Dies kann sich auf Ihre Inhalte auswirken; bitte lesen Sie [Same-origin policy for file: URIs](/de/docs/Web/Security/Same-origin_policy#file_origins) für Details.

## JavaScript-Änderungen

Firefox 3 unterstützt [JavaScript 1.8](/de/docs/New_in_JavaScript_1.8). Eine wichtige Änderung, die möglicherweise Updates Ihrer Website oder Anwendung erfordert, ist, dass das veraltete und nicht standardisierte `Script`-Objekt nicht mehr unterstützt wird. Dies ist nicht das `<script>`-Tag, sondern ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie dies jemals verwendet haben, also sind Sie wahrscheinlich nicht betroffen.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neues in JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
- [Aktualisieren von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
