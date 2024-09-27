---
title: Aktualisierung von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die Ihre Website oder Webanwendung betreffen könnten, sowie neue Funktionen, die Sie nutzen möchten. Dieser Artikel dient als Ausgangspunkt, wenn Sie daran arbeiten, Ihre Inhalte zu aktualisieren, um die Vorteile von Firefox 3 bestmöglich zu nutzen.

## DOM-Änderungen

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den
[W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde dies vorübergehend durchgesetzt, aber zu viele Sites brachen zusammen, als diese Regel angewendet wurde). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine bessere zukünftige Kompatibilität zu befolgen.

## HTML-Änderungen

### Änderungen am Zeichensatzvererbung

Firefox 3 behebt einen Sicherheitsfehler in Frames und Iframes, durch den sie den Zeichensatz der übergeordneten Seite erben konnten. Dies könnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen Frames den Zeichensatz des übergeordneten Dokuments nur erben, wenn sowohl der Frame als auch das übergeordnete Dokument vom selben Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass von anderen Servern geladene Frames denselben Zeichensatz erben, sollten Sie das HTML der Frames aktualisieren, um den Zeichensatz explizit anzugeben.

### Änderung des SCRIPT-Elements

Das `<script>`-Element in `text/html`-Dokumenten erfordert nun in HTML-4-Dokumenten ein schließendes `</script>`, auch wenn Sie keinen Inhalt dazwischen einfügen. Während in früheren Versionen von Firefox folgendes möglich war:

```html
<script … />
```

Muss das Markup jetzt den HTML-Spezifikationen entsprechen (wenn es wirklich HTML ist), und daher müssen Sie es tatsächlich schließen, wie folgt:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## CSS-Änderungen

### Änderung der Schriftgröße basierend auf em, ex Einheiten

Schriftgrößen in em und ex Einheiten wurden früher durch die Mindestschriftgrößeneinstellung des Benutzers beeinflusst: Wenn eine Schriftart aufgrund der Mindestschriftgröße größer angezeigt wurde, würden die Schriftgrößeinstellungen basierend auf diesem Wert entsprechend erweitert. Dies war inkonsistent mit der Art und Weise, wie prozentual basierte Schriftgrößen behandelt wurden.

Schriftgrößen in em und ex Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße“, die nicht von der Mindestschriftgröße des Benutzers beeinflusst wird. Mit anderen Worten, Schriftgrößen werden immer nach der Absicht des Designers berechnet und erst danach auf die Mindestschriftgröße angepasst.

Siehe [Firefox Bug 434718](https://bugzil.la/434718), insbesondere den Kommentar - Der folgende Link verweist auf einen Bugzilla-Anhang, nicht auf einen Bugzilla-Fehler; wenn Sie die Anhangsnummer als Fehlernummer verwenden, ergibt das keinen Sinn [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) für eine Demonstration (muss mit einer Mindestschriftgröße >= 6 betrachtet werden, um den Unterschied zu sehen: die beiden Boxkaskaden verhalten sich in Firefox 2 unterschiedlich, weil die em-basierte Schriftgröße von der Mindestschriftgröße „abprallt“).

## Sicherheitsänderungen

### Chrome-Zugriff

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder von Chrome mit dem `chrome://`-Protokoll laden. Unter anderem ermöglichte dies Webseiten, die Präsenz von Add-ons zu erkennen – was verwendet werden könnte, um die Sicherheit eines Benutzers zu gefährden, indem Add-ons umgangen werden, die dem Browser Sicherheitsfunktionen hinzufügen.

Firefox 3 erlaubt es Webinhalten nur, auf Objekte in den Bereichen `chrome://browser/` und `chrome://toolkit/` zuzugreifen. Diese Dateien sollen von Webinhalten zugänglich sein. Alle anderen Chrome-Inhalte sind nun vom Zugriff durch das Web blockiert.

Es gibt jedoch eine Möglichkeit für Erweiterungen, ihre Inhalte für das Web zugänglich zu machen. Sie können ein spezielles Flag in ihrer `chrome.manifest`-Datei angeben, wie folgt:

```plain
content mypackage location/ contentaccessible=yes
```

Dies sollte in der Regel nicht oft erforderlich sein, aber es steht für die seltenen Fälle zur Verfügung, in denen es benötigt wird. Beachten Sie, dass Firefox möglicherweise den Benutzer darauf hinweisen wird, dass Ihre Erweiterung das `contentaccessible`-Flag auf diese Weise verwendet, da dies ein potenzielles Sicherheitsrisiko darstellt.

> [!NOTE]
> Da Firefox 2 das `contentaccessible`-Flag nicht versteht (es wird die gesamte Zeile mit dem Flag ignorieren), sollten Sie, wenn Ihr Add-on sowohl mit Firefox 2 als auch mit Firefox 3 kompatibel sein soll, etwas Ähnliches tun:
>
> ```bash
> content mypackage location/
> content mypackage location/ contentaccessible=yes
>
> ```

### Datei-Upload-Felder

In früheren Versionen von Firefox gab es Fälle, in denen bei der Übertragung einer Datei der gesamte Pfad der Datei für die Webanwendung verfügbar war. Dieses Datenschutzproblem wurde in Firefox 3 behoben; jetzt ist nur noch der Dateiname selbst für die Webanwendung verfügbar.

### Verwendung von Remote-JARs in Frames

Die Verwendung von Code in JAR-Dateien, die von anderen Domains geladen werden, ist in Frames nicht mehr erlaubt; dies verringert ein [potenzielles Angriffsszenario](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen an der Same-Origin-Policy für file:-URIs

Die Same-Origin-Policy für file:-URIs hat sich in Firefox 3 geändert. Dies kann sich auf Ihre Inhalte auswirken; bitte lesen Sie [Same-Origin-Policy für file:-URIs](/de/docs/Web/Security/Same-origin_policy#file_origins) für Details.

## JavaScript-Änderungen

Firefox 3 unterstützt [JavaScript 1.8](/de/docs/New_in_JavaScript_1.8). Eine wichtige Änderung, die Aktualisierungen Ihrer Website oder Anwendung erfordern kann, ist, dass das veraltete und nicht standardisierte `Script`-Objekt nicht mehr unterstützt wird. Dies ist nicht der `<script>`-Tag, sondern ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie dies jemals verwendet haben, sodass Sie wahrscheinlich keine Probleme haben werden.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neu in JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
