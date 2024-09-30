---
title: Aktualisierung von Webanwendungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Es gibt eine Reihe von Änderungen im kommenden Firefox 3, die sich auf Ihre Website oder Webanwendung auswirken können, sowie neue Funktionen, die Sie möglicherweise nutzen möchten. Dieser Artikel dient als Ausgangspunkt, um Ihre Inhalte so zu aktualisieren, dass Sie die Vorteile von Firefox 3 voll ausschöpfen können.

## DOM-Änderungen

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder adoptiert mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es wurde während der Entwicklung von Firefox 3 eine Weile lang so gehandhabt, aber zu viele Seiten brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine bessere zukünftige Kompatibilität zu befolgen.

## HTML-Änderungen

### Änderungen bei der Zeichensatzvererbung

Firefox 3 schließt eine Sicherheitslücke in Frames und iframes, die es ihnen ermöglichte, den Zeichensatz des übergeordneten Dokuments zu erben. Dies könnte in bestimmten Fällen Probleme verursachen. Jetzt dürfen Frames den Zeichensatz des übergeordneten Dokuments nur dann erben, wenn sowohl der Frame als auch das übergeordnete Dokument vom gleichen Server geladen wurden. Wenn Sie Seiten haben, die davon ausgehen, dass Frames, die von anderen Servern geladen werden, den gleichen Zeichensatz erben, sollten Sie das HTML der Frames so aktualisieren, dass deren Zeichensatz explizit angegeben wird.

### Änderung am SCRIPT-Element

Das `<script>`-Element in `text/html`-Dokumenten erfordert jetzt ein abschließendes `</script>` in HTML 4-Dokumenten, auch wenn Sie keinen Inhalt dazwischen einfügen. Während in früheren Versionen von Firefox Folgendes möglich war:

```html
<script … />
```

Muss die Auszeichnung jetzt den HTML-Spezifikationen entsprechen (wenn es sich tatsächlich um HTML handelt) und daher tatsächlich geschlossen werden, so:

```html
<script …></script>
```

Dies verbessert sowohl die Kompatibilität als auch die Sicherheit.

## CSS-Änderungen

### Änderung der Schriftgröße basierend auf em-, ex-Einheiten

Schriftgrößenwerte in em- und ex-Einheiten wurden früher von der minimalen Schriftgrößeinstellung des Benutzers beeinflusst: Wenn eine Schriftart aufgrund der minimalen Schriftgröße größer dargestellt wurde, wurden die em- und ex-Werte für Schriftgrößeneinstellungen, die darauf basieren, entsprechend vergrößert. Dies war inkonsistent mit der Art und Weise, wie prozentbasierte Schriftgrößen sich verhielten.

Schriftgrößenwerte in em- und ex-Einheiten basieren jetzt auf einer "beabsichtigten Schriftgröße", die nicht von der minimalen Schriftgröße des Benutzers beeinflusst wird. Mit anderen Worten, Schriftgrößen werden immer nach der Absicht des Designers berechnet und anschließend für die minimale Schriftgröße angepasst.

Siehe [Firefox Bug 434718](https://bugzil.la/434718), insbesondere seine Anzeige in „NOT A CASE FOR THE BUG TEMPLATE“ - Der folgende Link zeigt auf einen Bugzilla-Anhang, nicht auf einen Bugzilla-Bug; wenn Sie die Anhangsnummer als Bugnummer verwenden, ergibt das keinen Sinn [Anhang 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) „NOT A CASE FOR THE BUG TEMPLATE“ für eine Demonstration (muss mit einer minimalen Schriftgröße >= 6 betrachtet werden, um den Unterschied zu sehen: Die beiden Box-Kaskaden verhalten sich in Firefox 2 unterschiedlich, da die em-basierte Schriftgröße "von der minimalen Schriftgröße zurückprallt").

## Sicherheitsänderungen

### Chrome-Zugriff

In früheren Versionen von Firefox konnte jede Webseite Skripte oder Bilder aus Chrome mit dem `chrome://`-Protokoll laden. Unter anderem machte dies Sites die Erkennung von Add-ons möglich, was ausgenutzt werden konnte, um die Sicherheit eines Nutzers durch die Umgehung von Add-ons, die Sicherheitsfunktionen zum Browser hinzufügen, zu verletzen.

Firefox 3 erlaubt jetzt nur noch Webinhalte den Zugriff auf Elemente in den `chrome://browser/` und `chrome://toolkit/` Bereichen. Diese Dateien sind dafür gedacht, dass sie von Webinhalten zugänglich sind. Alle anderen Chrome-Inhalte sind jetzt für den Zugriff aus dem Web gesperrt.

Es gibt jedoch eine Möglichkeit für Erweiterungen, ihren Inhalt webzugänglich zu machen. Sie können in ihrer `chrome.manifest`-Datei eine spezielle Kennzeichnung angeben, wie diese:

```plain
content mypackage location/ contentaccessible=yes
```

Dies sollte nicht häufig notwendig sein, aber es steht für die seltenen Fälle zur Verfügung, in denen es benötigt wird. Beachten Sie, dass Firefox den Nutzer möglicherweise darauf hinweist, dass Ihre Erweiterung das `contentaccessible`-Flag auf diese Weise verwendet, da dies ein potenzielles Sicherheitsrisiko darstellt.

> [!NOTE]
> Da Firefox 2 das `contentaccessible`-Flag nicht versteht (es ignoriert die gesamte Zeile, die das Flag enthält), sollten Sie, wenn Sie Ihr Add-on sowohl mit Firefox 2 als auch mit Firefox 3 kompatibel machen wollen, Folgendes tun:
>
> ```bash
> content mypackage location/
> content mypackage location/ contentaccessible=yes
>
> ```

### Felder für Dateiuploads

In früheren Versionen von Firefox gab es Fälle, in denen beim Hochladen einer Datei der gesamte Pfad der Datei für die Webanwendung zugänglich war. Dieses Datenschutzproblem wurde in Firefox 3 gelöst; jetzt ist nur noch der Dateiname selbst für die Webanwendung verfügbar.

### Verwendung von entfernten JARs in Frames

Die Verwendung von Code in JAR-Dateien, die von anderen Domains geladen werden, ist in Frames nicht mehr erlaubt; dies mindert einen [potenziellen Angriffsvektor](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Änderungen zur Same-Origin-Policy für file:-URIs

Die Same-Origin-Policy für file:-URIs hat sich in Firefox 3 geändert. Dies könnte sich auf Ihre Inhalte auswirken; bitte sehen Sie sich [Same-Origin-Policy für file:-URIs](/de/docs/Web/Security/Same-origin_policy#file_origins) für Details an.

## JavaScript-Änderungen

Firefox 3 unterstützt [JavaScript 1.8](/de/docs/New_in_JavaScript_1.8). Eine wichtige Änderung, die möglicherweise Aktualisierungen Ihrer Website oder Anwendung erfordert, ist, dass das veraltete und nicht standardisierte `Script`-Objekt nicht mehr unterstützt wird. Dies ist nicht das `<script>`-Tag, sondern ein JavaScript-Objekt, das nie standardisiert wurde. Es ist unwahrscheinlich, dass Sie es jemals verwendet haben, also sind Sie wahrscheinlich nicht betroffen.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Neu in JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
