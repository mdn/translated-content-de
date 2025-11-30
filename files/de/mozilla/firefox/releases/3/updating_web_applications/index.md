---
title: Aktualisierung von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die Ihre Website oder Webanwendung betreffen können, sowie neue Funktionen, die Sie nutzen möchten. Dieser Artikel dient als Ausgangspunkt, während Sie daran arbeiten, Ihre Inhalte zu aktualisieren, um die möglichen Vorteile von Firefox 3 voll auszuschöpfen.

## Änderungen im DOM

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in der [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde sie eine Zeit lang erzwungen, aber zu viele Websites funktionierten dann nicht mehr richtig). Wir empfehlen Webentwicklern, ihren Code zu korrigieren, um diese Regel zu befolgen und so die zukünftige Kompatibilität zu verbessern.

## Änderungen in HTML

### Änderungen beim Vererben von Zeichensätzen

Firefox 3 behebt einen Sicherheitsfehler in Frames und iframes, der es ihnen erlaubte, den Zeichensatz des Elternteils zu erben. Dies könnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen Frames den Zeichensatz des Elternteils nur erben, wenn sowohl Frame als auch Elternteil vom selben Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass Frames, die von anderen Servern geladen werden, denselben Zeichensatz erben, sollten Sie das HTML der Frames aktualisieren, um ihren Zeichensatz ausdrücklich anzugeben.

### Änderung des SCRIPT-Elements

Das `<script>`-Element in `text/html`-Dokumenten erfordert nun einen schließenden `</script>` in HTML 4-Dokumenten, auch wenn Sie keinen Inhalt dazwischen einfügen. Während Sie in früheren Versionen von Firefox Folgendes tun konnten:

```html
<script … />
```

muss das Markup jetzt den HTML-Spezifikationen entsprechen (wenn es tatsächlich HTML ist), und daher müssen Sie es tatsächlich schließen, so wie dies:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## Änderungen in CSS

### Änderung der Schriftgröße basierend auf em-, ex-Einheiten

Schriftgrößenwerte in em- und ex-Einheiten wurden früher durch die minimale Schriftgrößeneinstellung des Benutzers beeinflusst: Wenn eine Schriftart aufgrund der minimalen Schriftgröße größer angezeigt wurde, wurden die em- und ex-Einheiten für Schriftgrößeinstellungen entsprechend vergrößert. Dies war inkonsistent mit der Art und Weise, wie prozentuale Schriftgrößen verhielten.

Schriftgrößenwerte in em- und ex-Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße", die nicht von der minimalen Schriftgrößeneinstellung des Benutzers beeinflusst wird. Mit anderen Worten, Schriftgrößen werden immer gemäß der Absicht des Designers berechnet und danach an die minimale Schriftgröße angepasst.

Siehe [Firefox-Bug 434718](https://bugzil.la/434718), insbesondere sein NOT A CASE FOR THE BUG TEMPLATE - Der folgende Link zeigt auf einen Anhang in Bugzilla, nicht auf einen Bug in Bugzilla; wenn Sie die Anhangsnummer als Bugnummer verwenden, ergibt das keinen Sinn [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) NOT A CASE FOR THE BUG TEMPLATE für eine Demonstration (muss mit einer minimalen Schriftgröße >= 6 angesehen werden, um den Unterschied zu sehen: die beiden Box-Kaskaden verhalten sich in Firefox 2 unterschiedlich, da die em-basierte Schriftgröße von der minimalen Schriftgröße "abprallt").

## Sicherheitsänderungen

### Zugriff auf Chrome

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder aus Chrome mit dem `chrome://`-Protokoll laden. Unter anderem machte dies es möglich, das Vorhandensein von Add-ons zu erkennen – was genutzt werden konnte, um die Sicherheit eines Benutzers zu gefährden, indem Add-ons umgangen werden, die dem Browser Sicherheitsmerkmale hinzufügen.

Firefox 3 erlaubt es Webinhalten nur, auf Elemente in den `chrome://browser/` und `chrome://toolkit/` Bereichen zuzugreifen. Diese Dateien sollen von Webinhalten zugänglich sein. Alle anderen Chrome-Inhalte sind jetzt von der Webzugriff blockiert.

Es gibt jedoch eine Möglichkeit für Erweiterungen, ihre Inhalte webzugänglich zu machen. Sie können ein spezielles Flag in ihrer `chrome.manifest`-Datei angeben, so wie dies:

```plain
content my-package location/ contentaccessible=yes
```

Dies sollte nicht etwas sein, das Sie sehr oft tun müssen, aber es ist für diese seltenen Fälle verfügbar, in denen es benötigt wird. Beachten Sie, dass Firefox den Benutzer möglicherweise darauf hinweist, dass Ihre Erweiterung das `contentaccessible`-Flag auf diese Weise verwendet, da dies ein potenzielles Sicherheitsrisiko darstellt.

> [!NOTE]
> Da Firefox 2 das `contentaccessible`-Flag nicht versteht (es wird die gesamte Zeile mit dem Flag ignorieren), sollten Sie, wenn Sie Ihr Add-on sowohl mit Firefox 2 als auch mit Firefox 3 kompatibel machen möchten, so etwas tun:
>
> ```bash
> content my-package location/
> content my-package location/ contentaccessible=yes
>
> ```

### Datei-Upload-Felder

In früheren Versionen von Firefox gab es Fälle, in denen beim Hochladen einer Datei der gesamte Pfad der Datei für die Webanwendung verfügbar war. Dieses Datenschutzproblem wurde in Firefox 3 behoben; jetzt ist nur noch der Dateiname selbst für die Webanwendung verfügbar.

### Verwendung von externen JARs in Frames

Die Verwendung von Code in JAR-Dateien, die von anderen Domains geladen wurden, ist nicht mehr in Frames erlaubt; dies entschärft ein [potenzielles Angriffsszenario](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen der Same-Origin-Policy für file: URIs

Die Same-Origin-Policy für file: URIs hat sich in Firefox 3 geändert. Dies kann Ihre Inhalte betreffen; bitte sehen Sie für Details [Same-Origin-Policy für file: URIs](/de/docs/Web/Security/Defenses/Same-origin_policy#file_origins).

## Änderungen in JavaScript

Firefox 3 unterstützt [JavaScript 1.8](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8). Eine wichtige Änderung, die Aktualisierungen Ihrer Website oder Anwendung erfordern könnte, ist, dass das veraltete und nicht standardisierte `Script`-Objekt nicht mehr unterstützt wird. Dabei handelt es sich nicht um das `<script>`-Tag, sondern um ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie das jemals genutzt haben, daher sind Sie wahrscheinlich unbetroffen.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neu in JavaScript 1.8](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8)
- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
