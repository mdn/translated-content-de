---
title: Wie man eine Technologie recherchiert
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel gibt Ihnen einige hilfreiche Informationen darüber, wie man an das Dokumentieren von Technologien herangeht.

## Vorbereitungsarbeit

Bevor Sie damit beginnen, etwas auf den MDN Web Docs zu dokumentieren oder zu aktualisieren, gibt es einige Dinge, die Sie vorbereiten und planen sollten, bevor Sie tatsächlich schreiben.

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens ein vernünftiges Wissen über folgende Themen haben:

- Webtechnologien wie HTML, CSS und JavaScript.
- Das Lesen von Webtechnologie-Spezifikationen. Diese werden Sie häufig betrachten, während Sie APIs dokumentieren.

Alles andere kann auf dem Weg gelernt werden.

### Ressourcen überprüfen

Nützliche Ressourcen für das Schreiben jeglicher Dokumentation umfassen:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie sind bereits hier, aber es ist gut, alle Artikel durchzusehen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und den enthaltenen Abschnitten sowie den unterschiedlichen Methoden, wie wir verschiedene Teile der Seite einbinden (wie Spezifikationen und Browser-Kompatibilität), vertraut zu machen.
2. Die neueste Spezifikation: Verschiedene Standardisierungsgremien erstellen Spezifikationen für Technologien, die auf den MDN Web Docs dokumentiert sind. Zum Beispiel [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und die [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Spezifikationen sind auf Referenzseiten der MDN Web Docs verlinkt (überprüfen Sie den Abschnitt "Spezifikationen"). Alternativ können Sie in der Regel eine Websuche durchführen. Arbeiten Sie immer mit der neuesten, aktuellsten Spezifikation.
3. Die neuesten modernen Webbrowser: Diese sollten experimentelle/Alpha-Versionen wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/) sein, die eher dazu in der Lage sind, die Funktionen zu unterstützen, die Sie dokumentieren. Dies ist besonders relevant, wenn Sie ein "kommendes" Feature dokumentieren.
4. Demos/Blogbeiträge/andere Informationen: Finden Sie so viele Informationen wie möglich. Wenn Sie eine Technologie aktualisieren, weil sie sich geändert hat, stellen Sie sicher, dass die Ressourcen, die Sie zum Lernen verwenden, nicht veraltet sind. Aus diesem Grund sind die ersten beiden Punkte oben wichtig.

Es kann auch sinnvoll sein, jemanden zu finden, der Fragen beantworten kann. Dies können die Autoren der Spezifikation oder die Ingenieure sein, die Browser-Features implementieren.

### Spezifikationen lesen

Dies kann anfangs ein wenig fremd erscheinen, aber je öfter Sie es tun, desto mehr gewöhnen Sie sich daran. Hier sind einige gute Links, die Ihnen beim Einstieg helfen:

- [Wie man W3C-Spezifikationen liest](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [Verstehen der CSS-Spezifikationen](https://www.w3.org/Style/CSS/read) von der W3C
- [Wie man Webspezifikationen Teil I liest – oder: WebVR, wie funktionierst du?](https://surma.dev/things/reading-specs/) behandelt das spezifische Lesen der WebVR-Spezifikation, ist aber eine großartige Einführung ins Lesen von Web API-Spezifikationen.
- [Wie man Webspezifikationen Teil IIa liest – oder: ECMAScript-Symbole](https://surma.dev/things/reading-specs-2/) Der zweite Teil des obigen Links enthält Informationen über das Verständnis der ECMAScript-Spezifikation, die die JavaScript-Sprache umreißt.

Zusätzlich haben wir den [Informationen enthalten in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file) Leitfaden, der beim Lesen von Web-API-Spezifikationen wirklich helfen kann.

## Das Feature erkunden

Sie werden im Verlauf der Dokumentation einer Technologie viele Male zu Codebeispielen oder Demos zurückkehren, aber es ist sehr nützlich, zunächst Zeit zu investieren, um sich mit der Funktionsweise der Technologie vertraut zu machen. Dies ist eine wirklich wertvolle Übung, da sie Ihnen ein gutes Verständnis dafür vermittelt, was die Anwendungsfälle sind (_warum_ ein Entwickler diese Technologie verwenden würde) und gleichzeitig beim Erstellen einiger Codebeispiele hilft.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode aber weiterhin in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die gefundenen Demos oder fragen Sie einen technischen Kontakt.

## Die Liste der zu schreibenden oder zu aktualisierenden Seiten erstellen

Die verschiedenen Seiten, die Sie von Grund auf schreiben oder aktualisieren müssen, variieren je nach der Technologie, die Sie dokumentieren. Sehen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den relevanten Abschnitt für die Technologie, die Sie dokumentieren, an. Höchstwahrscheinlich müssen Sie auch vorhandene Dokumentationen aktualisieren, daher suchen Sie auf den MDN Web Docs nach Seiten, die mit dem, was Sie schreiben, in Verbindung stehen.

### Seitenleisten

Es ist möglich, dass die Seitenleiste der von Ihnen geschriebenen Seiten ebenfalls definiert oder aktualisiert werden muss. Um herauszufinden, ob dies notwendig ist und wie es gemacht wird, schauen Sie in den [Seitenleisten-Leitfaden](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).

### Codebeispiele

Einige der Codebeispiele für die MDN Web Docs werden in separaten Repositories gehalten. Am bemerkenswertesten sind dies die interaktiven Beispiele, die im "Try it"-Abschnitt der Referenzseiten erscheinen, und der größere Democode, der für Leitfäden benötigt wird. Wenn Sie eines dieser Repositories hinzufügen oder ändern müssen, ist es eine gute Idee, es in Ihrer Liste zu vermerken.

Der Artikel [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) beschreibt die verschiedenen Arten von Codebeispielen, die wir auf den MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API, Ihre anfängliche Liste der zu dokumentierenden Abschnitte könnte in etwa so aussehen:

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Codebeispiele
9. Seitenleisten

Sie können dies dann mit weiteren Details erweitern, indem Sie jede Schnittstelle und ihre Mitglieder hinzufügen. Wenn Sie beispielsweise die Web Audio API dokumentieren würden, könnte Ihre Liste in etwa so aussehen:

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

Es ist eine gute Idee, zu diesem Zeitpunkt ein Tracking-[Issue](https://github.com/mdn/content/issues) im `mdn/content` Repository zu eröffnen, mit den Seiten, die als To-do (Checkbox) Liste aufgelistet sind. Dies ermöglicht nicht nur Ihnen, sondern auch anderen, die an der Dokumentation arbeiten, den Status öffentlich zu verfolgen. Sie können auch Ihre Pull-Requests mit diesem Issue verlinken, um allen mehr Kontext zu geben.

## Die Seiten erstellen

Erstellen Sie nun die benötigten Seiten. Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem Leitfaden [Wie erstellt, verschiebt, löscht und bearbeitet man Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an. Sehen Sie sich unseren Leitfaden zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) an, um Vorlagen zu finden, die nützlich sein könnten.
