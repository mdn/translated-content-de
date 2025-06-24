---
title: Anleitung zur Recherche einer Technologie
short-title: Recherche einer Technologie
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel bietet nützliche Informationen darüber, wie Sie den Ansatz zur Dokumentation von Technologien angehen können.

## Die Vorbereitungen

Bevor Sie beginnen, auf MDN Web Docs etwas zu dokumentieren oder zu aktualisieren, gibt es einige Dinge, die Sie vorbereiten und planen sollten, bevor Sie tatsächlich zu schreiben beginnen.

Es wird vorausgesetzt, dass Sie, bevor Sie diesen Leitfaden lesen, ein angemessenes Wissen über folgende Themen haben:

- Web-Technologien wie HTML, CSS und JavaScript.
- Lesen von Web-Technologie-Spezifikationen. Diese werden Sie häufig ansehen, während Sie APIs dokumentieren.

Alles andere kann unterwegs gelernt werden.

### Ressourcen überprüfen

Nützliche Ressourcen für die Erstellung jeglicher Dokumentation sind:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie sind bereits hier, aber es ist gut, alle Artikel zu durchsuchen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und den darin enthaltenen Abschnitten sowie den verschiedenen Methoden zur Einbindung von Seitenelementen (wie Spezifikationen und Browser-Kompatibilität) vertraut zu machen.
2. Die neueste Spezifikation: Verschiedene Standardisierungsorganisationen erstellen Spezifikationen für Technologien, die auf MDN Web Docs dokumentiert sind. Beispiele sind [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML sowie die [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Spezifikationen sind auf MDN Web Docs in den Referenzseiten verlinkt (prüfen Sie den Abschnitt "Specifications"). Alternativ können Sie normalerweise eine Websuche durchführen. Arbeiten Sie stets mit der aktuellsten, neuesten Spezifikation.
3. Die neuesten modernen Webbrowser: Diese sollten experimentelle/Alpha-Versionen wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/) sein, die eher die Funktionen unterstützen, die Sie dokumentieren. Dies ist besonders wichtig, wenn Sie ein bevorstehendes Feature dokumentieren.
4. Demos/Blogartikel/andere Informationen: Finden Sie so viele Informationen wie möglich. Wenn Sie eine Technologie aktualisieren, weil sie sich geändert hat, stellen Sie sicher, dass die Ressourcen, die Sie zum Lernen verwenden, nicht veraltet sind. Deshalb sind die ersten beiden Punkte oben wichtig.

Es kann auch sinnvoll sein, jemanden zu finden, der bei Fragen hilft. Das können die Autoren der Spezifikation oder die Ingenieure sein, die Browser-Features implementieren.

### Spezifikationen lesen

Dies kann sich anfangs etwas fremd anfühlen, aber je öfter Sie es tun, desto vertrauter wird es. Hier sind einige gute Links, um den Einstieg zu erleichtern:

- [How to read W3C specs](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [Understanding the CSS specifications](https://www.w3.org/Style/CSS/read) von der W3C
- [How to read web specs part I – or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) behandelt das Lesen der WebVR-Spezifikation speziell, ist aber eine großartige Einführung in das Lesen von Web-API-Spezifikationen.
- [How to read web specs part IIa – or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) der zweite Teil des obigen Links enthält Informationen über das Verständnis der ECMAScript-Spezifikation, die die JavaScript-Sprache umreißt.

Zusätzlich haben wir den [Information contained in a WebIDL file](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file) Leitfaden, der wirklich beim Lesen von Web-API-Spezifikationen helfen kann.

## Das Feature erforschen

Sie werden während des Dokumentierens einer Technologie viele Male auf das Schreiben von Codebeispielen oder das Erstellen von Demos zurückkommen. Es ist jedoch sehr nützlich, sich zunächst damit vertraut zu machen, wie die Technologie funktioniert. Dies ist eine wirklich wertvolle Übung, da sie Ihnen ein gutes Verständnis der Anwendungsfälle vermittelt (_warum_ ein Entwickler diese Technologie nutzen würde) und Ihnen gleichzeitig beim Erstellen einiger Codebeispiele hilft.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode jedoch weiterhin in den Browsern funktioniert, müssen Sie häufig beide Methoden an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf gefundene Demos oder fragen Sie einen technischen Kontakt.

## Erstellen der Liste der zu schreibenden oder zu aktualisierenden Seiten

Die verschiedenen Seiten, die Sie von Grund auf neu schreiben oder aktualisieren müssen, variieren je nach der von Ihnen dokumentierten Technologie. Schauen Sie sich die [Seiten-Typen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den entsprechenden Abschnitt für die von Ihnen dokumentierte Technologie an. Wahrscheinlich müssen Sie auch die bestehende Dokumentation aktualisieren, also suchen Sie auf MDN Web Docs nach Seiten, die mit dem, was Sie schreiben, zusammenhängen.

### Sidebars

Es ist möglich, dass das Seitenmenü der von Ihnen geschriebenen Seiten ebenfalls definiert oder aktualisiert werden muss. Um herauszufinden, ob dies notwendig ist und wie man es tut, schauen Sie sich den [Sidebar-Leitfaden](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) an.

### Codebeispiele

Einige der Codebeispiele für MDN Web Docs befinden sich in separaten Repositories. Besonders erwähnenswert sind die interaktiven Beispiele im Abschnitt "Try it" auf den Referenzseiten und der größere Demo-Code, der für Leitfäden benötigt wird. Wenn Sie eines dieser Repositories hinzufügen oder ändern müssen, ist es eine gute Idee, es in Ihrer Liste zu vermerken.

Der Artikel [Code examples](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) beschreibt die verschiedenen Arten von Codebeispielen, die wir auf MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API, Ihre anfängliche Liste der zu dokumentierenden Abschnitte sieht ungefähr so aus:

1. Übersichtsseite
2. Interface-Seiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisse-Seiten
7. Konzept-/Leitfaden-Seiten
8. Codebeispiele
9. Sidebars

Sie können es dann mit mehr Details erweitern, indem Sie jedes Interface und seine Mitglieder hinzufügen. Wenn Sie beispielsweise die Web Audio API dokumentieren würden, könnte Ihre Liste folgendermaßen aussehen:

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Ereignisse (Liste aktualisieren)
  - starten
  - beenden
  - …

## Ein Issue eröffnen

Es ist an dieser Stelle eine gute Idee, ein Tracking-[Issue](https://github.com/mdn/content/issues) im `mdn/content` Repository mit den aufgelisteten Seiten als To-Do- (Kontrollkästchen-)Liste zu eröffnen. Dies ermöglicht es nicht nur Ihnen, sondern auch anderen, die an der Dokumentation arbeiten, öffentlich den Status zu verfolgen. Sie können auch Ihre Pull Requests mit diesem Issue verlinken, um allen mehr Kontext zu geben.

## Seiten erstellen

Erstellen Sie nun die benötigten Seiten. Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserer [Anleitung zum Erstellen, Verschieben, Löschen und Bearbeiten von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an. Sehen Sie sich unsere [Seiten-Typen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) an, um eventuell nützliche Seitentemplates zu finden.
