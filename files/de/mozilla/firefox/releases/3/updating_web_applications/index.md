---
title: Aktualisierung von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die sich auf Ihre Website oder Webanwendung auswirken können, sowie neue Funktionen, die Sie möglicherweise nutzen möchten. Dieser Artikel dient als Ausgangspunkt, um Ihre Inhalte so zu aktualisieren, dass Sie die Möglichkeiten von Firefox 3 optimal nutzen können.

## DOM-Änderungen

Knoten von externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den
[W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde sie eine Zeit lang durchgesetzt, aber zu viele Websites funktionierten nicht mehr, wenn diese Regel erzwungen wurde). Wir ermutigen Webentwickler, ihren Code zu korrigieren und diese Regel zu befolgen, um die zukünftige Kompatibilität zu verbessern.

## HTML-Änderungen

### Änderungen bei der Vererbung von Zeichensätzen

Firefox 3 schließt einen Sicherheitsfehler in Frames und Iframes, der es ihnen ermöglichte, den Zeichensatz des Elternteils zu übernehmen. Dies konnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen Frames den Zeichensatz des Elternteils nur dann erben, wenn sowohl der Frame als auch der Elternteil vom selben Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass Frames, die von anderen Servern geladen werden, den gleichen Zeichensatz erben, sollten Sie den HTML-Code der Frames aktualisieren, um ihren Zeichensatz explizit anzugeben.

### Änderung am SCRIPT-Element

Das `<script>`-Element in `text/html`-Dokumenten erfordert nun in HTML 4-Dokumenten einen abschließenden `</script>`, auch wenn Sie keinen Inhalt dazwischen einfügen. Während Sie in früheren Versionen von Firefox Folgendes tun konnten:

```html
<script … />
```

muss das Markup nun den HTML-Spezifikationen entsprechen (wenn es tatsächlich HTML ist), und daher müssen Sie es tatsächlich schließen, wie folgt:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## CSS-Änderungen

### Änderung der Schriftgröße basierend auf em, ex Einheiten

Schriftgrößenwerte in em- und ex-Einheiten wurden früher von der Mindesteinstellungen der Schriftgröße des Benutzers beeinflusst: wenn eine Schrift aufgrund der Mindestschriftgröße größer angezeigt wurde, wurden die em- und ex-Einheiten für die Einstellungen der Schriftgröße entsprechend vergrößert. Dies war inkonsistent mit der Art und Weise, wie prozentbasierte Schriftgrößen sich verhalten.

Schriftgrößenwerte in em- und ex-Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße", die nicht von der Mindestschriftgröße des Benutzers beeinflusst wird. Mit anderen Worten, die Schriftgrößen werden immer entsprechend den Absichten des Designers berechnet und erst danach für die Mindestschriftgröße angepasst.

Siehe [Firefox-Bug 434718](https://bugzil.la/434718), insbesondere seinen NICHT EIN FALL FÜR DIE BUG-VORLAGE - Der folgende Link verweist auf eine Bugzilla-Anhangdatei, nicht auf einen Bugzilla-Bug; wenn Sie die Anhangsnummer als Bugnummer verwenden, wird es unsinnig [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) NICHT EIN FALL FÜR DIE BUG-VORLAGE für eine Demonstration (muss mit einer Mindestschriftgröße >= 6 betrachtet werden, um den Unterschied zu sehen: die beiden Boxenkaskaden verhalten sich in Firefox 2 unterschiedlich, weil die em-basierte Schriftgröße von der Mindestschriftgröße "abprallt").

## Sicherheitsänderungen

### Chrome-Zugriff

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder von Chrome mit dem `chrome://`-Protokoll laden. Unter anderem machte es dies möglich, die Präsenz von Add-ons zu erkennen — was genutzt werden konnte, um die Sicherheit eines Nutzers zu gefährden, indem Add-ons umgangen wurden, die dem Browser Sicherheitsfunktionen hinzufügen.

Firefox 3 erlaubt es Webinhalten nur, auf Elemente in den `chrome://browser/` und `chrome://toolkit/` Bereichen zuzugreifen. Diese Dateien sind für den Zugriff durch Webinhalte vorgesehen. Auf alle anderen Chrome-Inhalte wird der Zugriff durch das Web nun blockiert.

Es gibt jedoch eine Möglichkeit, dass Erweiterungen ihren Inhalt webzugänglich machen können. Sie können ein spezielles Flag in ihrer `chrome.manifest`-Datei angeben, so:

```plain
content mypackage location/ contentaccessible=yes
```

Dies sollte nicht oft notwendig sein, es steht jedoch für die seltenen Fälle, in denen es nötig ist, zur Verfügung. Beachten Sie, dass Firefox den Benutzer möglicherweise darauf hinweist, dass Ihre Erweiterung das `contentaccessible`-Flag auf diese Weise verwendet, da es ein potenzielles Sicherheitsrisiko darstellt.

> [!NOTE]
> Da Firefox 2 das `contentaccessible`-Flag nicht versteht (es ignoriert die gesamte Zeile, die das Flag enthält), sollten Sie, wenn Sie Ihr Add-on sowohl mit Firefox 2 als auch mit Firefox 3 kompatibel machen möchten, Folgendes tun:
>
> ```bash
> content mypackage location/
> content mypackage location/ contentaccessible=yes
>
> ```

### Datei-Upload-Felder

In früheren Versionen von Firefox gab es Fälle, in denen beim Upload eines Benutzers die gesamte Pfadangabe der Datei für die Webanwendung zugänglich war. Dieses Datenschutzproblem wurde in Firefox 3 behoben; jetzt ist nur noch der Dateiname selbst für die Webanwendung zugänglich.

### Verwendung von Remote-JARs in Frames

Es ist nicht mehr erlaubt, Code in JAR-Dateien zu verwenden, die von anderen Domains geladen werden; dies mildert einen [potenziellen Angriffsvektor](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen der Same-Origin-Policy für file:-URIs

Die Same-Origin-Policy für file:-URIs hat sich in Firefox 3 geändert. Dies kann sich auf Ihre Inhalte auswirken; bitte lesen Sie [Same-Origin-Policy für file:-URIs](/de/docs/Web/Security/Same-origin_policy#file_origins) für Details.

## JavaScript-Änderungen

Firefox 3 unterstützt [JavaScript 1.8](/de/docs/New_in_JavaScript_1.8). Eine wichtige Änderung, die Updates Ihrer Website oder Anwendung erfordern könnte, ist, dass das veraltete und nicht standardisierte `Script`-Objekt nicht mehr unterstützt wird. Dies ist nicht der `<script>`-Tag, sondern ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie es jemals verwendet haben, also ist wahrscheinlich alles in Ordnung.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neu in JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
- [Aktualisieren von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
