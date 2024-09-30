---
title: Wie man eine Technologie recherchiert
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel gibt Ihnen nützliche Informationen darüber, wie Sie an die Dokumentation von Technologien herangehen können.

## Vorbereitungsarbeiten

Bevor Sie beginnen, etwas auf MDN Web Docs zu dokumentieren oder zu aktualisieren, sollten Sie einige Dinge vorbereiten und planen, bevor Sie tatsächlich mit dem Schreiben beginnen.

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens ein angemessenes Wissen über folgendes haben:

- Web-Technologien wie HTML, CSS und JavaScript.
- Lesen von Web-Technologie-Spezifikationen. Sie werden sich diese oft anschauen, während Sie APIs dokumentieren.

Alles andere kann im Laufe der Zeit gelernt werden.

### Ressourcen überprüfen

Nützliche Ressourcen für das Schreiben jeglicher Dokumentation sind:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie sind bereits hier, aber es ist gut, alle Artikel durchzusehen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und den darin enthaltenen Abschnitten sowie den verschiedenen Möglichkeiten, wie wir verschiedene Teile der Seite einbinden (wie Spezifikationen und Browser-Kompatibilität), vertraut zu machen.
2. Die neueste Spezifikation: Verschiedene Standardisierungsgremien erstellen Spezifikationen für Technologien, die auf MDN Web Docs dokumentiert sind. Zum Beispiel [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und die [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Spezifikationen sind auf den Referenzseiten von MDN Web Docs verlinkt (sehen Sie im Abschnitt "Spezifikationen" nach). Alternativ können Sie normalerweise auch eine Websuche durchführen. Arbeiten Sie immer mit der neuesten, aktuellsten Spezifikation.
3. Die neuesten modernen Webbrowser: Diese sollten experimentelle/Alpha-Builds sein wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/), die die Funktionen, die Sie dokumentieren, eher unterstützen. Dies ist besonders relevant, wenn Sie eine Funktion dokumentieren, die "bevorstehend" ist.
4. Demos/Blogposts/sonstige Informationen: Finden Sie so viele Informationen wie möglich. Wenn Sie eine Technologie aktualisieren, weil sie sich geändert hat, stellen Sie sicher, dass die von Ihnen genutzten Ressourcen nicht veraltet sind. Deshalb sind die ersten beiden Punkte oben wichtig.

Es kann auch klug sein, jemanden zu finden, der Fragen beantworten kann. Dies können die Spezifikationsautoren oder die Ingenieure sein, die Browserfunktionen implementieren.

### Spezifikationen lesen

Dies mag anfangs etwas fremd erscheinen, aber je öfter Sie es tun, desto mehr gewöhnen Sie sich daran. Hier sind einige gute Links, um Ihnen den Einstieg zu erleichtern:

- [Wie man W3C-Spezifikationen liest](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [Verstehen der CSS-Spezifikationen](https://www.w3.org/Style/CSS/read) von der W3C
- [Wie man Web-Spezifikationen liest Teil I – oder: WebVR, wie funktioniert das?](https://surma.dev/things/reading-specs/) erklärt das Lesen der WebVR-Spezifikation im Speziellen, bietet aber eine großartige Einführung in das Lesen von Web-API-Spezifikationen.
- [Wie man Web-Spezifikationen liest Teil IIa – oder: ECMAScript Symbole](https://surma.dev/things/reading-specs-2/) der zweite Teil des obigen Links enthält Informationen zum Verständnis der ECMAScript-Spezifikation, die die JavaScript-Sprache umrissen.

Zusätzlich haben wir den [Informationen in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file) Leitfaden, der beim Lesen von Web-API-Spezifikationen wirklich hilfreich sein kann.

## Die Funktion erkunden

Sie werden viele Male im Laufe der Dokumentation einer Technologie auf das Schreiben von Codebeispielen oder das Erstellen von Demos zurückgreifen müssen, aber es ist sehr nützlich, damit zu beginnen, sich mit der Funktionsweise der Technologie vertraut zu machen. Dies ist eine wirklich wertvolle Übung, da sie Ihnen ein gutes Verständnis dafür vermittelt, was die Anwendungsfälle sind (_warum_ ein Entwickler diese Technologie verwenden würde) und gleichzeitig hilft, einige Codebeispiele zu erstellen.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode jedoch in Browsern noch funktioniert, müssen Sie häufig beide an derselben Stelle dokumentieren, damit alte und neue Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die gefundenen Demos oder fragen Sie einen Ingenieurkontakt.

## Erstellen der Liste von Seiten, die geschrieben oder aktualisiert werden müssen

Die verschiedenen Seiten, die Sie von Grund auf neu schreiben oder aktualisieren müssen, variieren je nach der Technologie, über die Sie schreiben. Sehen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den relevanten Abschnitt für die Technologie, die Sie dokumentieren, an. Wahrscheinlich müssen Sie auch bestehende Dokumentationen aktualisieren, daher sollten Sie auf MDN Web Docs nach Seiten suchen, die sich auf das Thema beziehen, über das Sie schreiben.

### Seitenleisten

Es ist möglich, dass die Seitenleiste der von Ihnen geschriebenen Seiten ebenfalls definiert oder aktualisiert werden muss. Um herauszufinden, ob dies erforderlich ist und wie es gemacht wird, sehen Sie sich den [Leitfaden für Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) an.

### Code-Beispiele

Einige der Codebeispiele für MDN Web Docs befinden sich in separaten Repositories. Am bemerkenswertesten sind dies die interaktiven Beispiele, die im Abschnitt "Probieren Sie es aus" auf den Referenzseiten und dem größeren Demo-Code benötigt werden, der für Leitfäden erforderlich ist. Wenn Sie eines dieser Repositories hinzufügen oder ändern müssen, ist es eine gute Idee, dies in Ihrer Liste zu notieren.

Der [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) Artikel beschreibt die verschiedenen Arten von Code-Beispielen, die wir auf MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API, Ihre anfängliche Liste von zu dokumentierenden Abschnitten sieht ungefähr so aus:

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Code-Beispiele
9. Seitenleisten

Sie können es dann mit mehr Details erweitern und jedes Interface und seine Mitglieder hinzufügen. Wenn Sie beispielsweise die Web Audio API dokumentieren, könnte Ihre Liste folgendermaßen aussehen:

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

  - start
  - end
  - …

## Ein Issue eröffnen

An diesem Punkt ist es eine gute Idee, ein Tracking-[Issue](https://github.com/mdn/content/issues) im `mdn/content`-Repository mit den als To-Do (Checkbox-)Liste aufgeführten Seiten zu eröffnen. Dies ermöglicht nicht nur Ihnen, sondern auch anderen, die an der Dokumentation arbeiten, den Status öffentlich zu verfolgen. Sie können auch Ihre Pull-Requests mit diesem Issue verlinken, um allen mehr Kontext zu geben.

## Die Seiten erstellen

Erstellen Sie nun die benötigten Seiten. Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem [Wie man Seiten erstellt, verschiebt, löscht und bearbeitet](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Leitfaden. Sehen Sie sich unseren [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) Leitfaden für Seitentemplates an, die nützlich sein könnten.
