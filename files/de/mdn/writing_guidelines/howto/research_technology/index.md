---
title: Anleitung zur Recherche einer Technologie
short-title: Eine Technologie recherchieren
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Dieser Artikel bietet Ihnen nützliche Informationen darüber, wie Sie Technologien dokumentieren können.

## Vorbereitung

Bevor Sie beginnen, etwas auf MDN Web Docs zu dokumentieren oder zu aktualisieren, gibt es einige Dinge, die Sie vorbereiten und planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

Es wird angenommen, dass Sie dieses Leitfaden lesen, nachdem Sie über ausreichende Kenntnisse von:

- Webtechnologien wie HTML, CSS und JavaScript
- Webtechnologiespezifikationen lesen verfügen. Sie werden diese häufig durchgehen, während Sie APIs dokumentieren.

Alles andere kann auf dem Weg gelernt werden.

### Ressourcen überprüfen

Nützliche Ressourcen für jegliche Dokumentation umfassen:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie sind bereits hier, aber es ist gut, alle Artikel durchzulesen und sich mit unserem Schreibstil sowie mit den verschiedenen Arten von Seiten und deren Abschnitten vertraut zu machen, sowie mit den unterschiedlichen Möglichkeiten, wie wir verschiedene Teile der Seite einbeziehen (wie Spezifikationen und Browser-Kompatibilität).
2. Die neueste Spezifikation: Verschiedene Standardgremien erstellen Spezifikationen für Technologien, die auf MDN Web Docs dokumentiert sind. Zum Beispiel erstellt [TC39](https://tc39.es/) die Spezifikation für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und das [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Spezifikationen sind auf MDN Web Docs von den Referenzseiten verlinkt (überprüfen Sie den Abschnitt "Specifications"). Alternativ können Sie üblicherweise eine Websuche durchführen. Arbeiten Sie immer mit der neuesten, aktuellen Spezifikation.
3. Die neuesten modernen Webbrowser: Diese sollten experimentelle/Alpha-Versionen sein, wie [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/) die mit höherer Wahrscheinlichkeit die Funktionen unterstützen, die Sie dokumentieren. Dies ist besonders relevant, wenn Sie eine Funktion dokumentieren, die "kommend" ist.
4. Demos/Blog-Posts/weitere Informationen: Suchen Sie so viele Informationen wie möglich. Wenn Sie eine Technologie aktualisieren, weil sie sich verändert hat, stellen Sie sicher, dass die Ressourcen, die Sie verwenden, um zu lernen, nicht veraltet sind. Aus diesem Grund sind die ersten beiden Punkte oben wichtig.

Es kann auch klug sein, jemanden zu finden, der bei Fragen hilft. Diese Person kann ein Autor der Spezifikation oder ein Ingenieur sein, der Browser-Features implementiert.

### Spezifikationen lesen

Dies kann sich anfangs etwas befremdlich anfühlen, aber je öfter Sie es tun, desto mehr gewöhnen Sie sich daran. Hier sind einige gute Links, die Ihnen den Einstieg erleichtern:

- [Wie man W3C-Spezifikationen liest](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [Die CSS-Spezifikationen verstehen](https://www.w3.org/Style/CSS/read) vom W3C
- [Wie man Webspezifikationen Teil I liest – oder: WebVR, wie funktioniert das?](https://surma.dev/things/reading-specs/) behandelt speziell das Lesen der WebVR-Spezifikation, ist aber eine großartige Einführung in das Lesen von Web-API-Spezifikationen.
- [Wie man Webspezifikationen Teil IIa liest – oder: ECMAScript-Symbole](https://surma.dev/things/reading-specs-2/) der zweite Teil des obigen Links enthält Informationen zum Verstehen der ECMAScript-Spezifikation, die die JavaScript-Sprache beschreibt.

Zusätzlich haben wir den [Informationen enthaltend in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file) Leitfaden, der beim Lesen von Web-API-Spezifikationen wirklich hilfreich sein kann.

## Das Feature erkunden

Sie werden im Laufe der Dokumentation einer Technologie viele Male zu Codebeispielen oder Demos zurückkehren, aber es ist sehr nützlich, damit zu beginnen, sich mit der Funktionsweise der Technologie vertraut zu machen. Dies ist eine wirklich wertvolle Übung, da sie Ihnen ein gutes Verständnis dafür vermittelt, was die Anwendungsfälle sind (_warum_ ein Entwickler diese Technologie verwenden würde) und gleichzeitig bei der Erstellung einiger Codebeispiele hilft.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass, sagen wir, eine Methode jetzt anders definiert ist, die alte Methode jedoch weiterhin in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die Demos, die Sie gefunden haben, oder fragen Sie einen technischen Ansprechpartner.

## Die Liste der zu schreibenden oder zu aktualisierenden Seiten erstellen

Die verschiedenen Seiten, die Sie von Grund auf neu schreiben oder aktualisieren müssen, variieren je nach Technologie, über die Sie schreiben. Schauen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den relevanten Abschnitt für die Technologie an, die Sie dokumentieren. Es ist sehr wahrscheinlich, dass Sie auch vorhandene Dokumentationen aktualisieren müssen, also suchen Sie auf MDN Web Docs nach Seiten, die mit Ihrem Thema in Verbindung stehen.

### Seitenleisten

Es ist möglich, dass die Seitenleiste der von Ihnen erstellten Seiten ebenfalls definiert oder aktualisiert werden muss. Um herauszufinden, ob dies erforderlich ist und wie man es macht, schauen Sie sich den [Leitfaden für Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) an.

### Codebeispiele

Einige der Codebeispiele für MDN Web Docs befinden sich in separaten Repositories. Vor allem sind dies die interaktiven Beispiele, die im Abschnitt "Probieren Sie es aus" auf den Referenzseiten erscheinen sowie der größere Democode, der für Leitfäden benötigt wird. Wenn Sie eines dieser Repositories hinzufügen oder ändern müssen, ist es eine gute Idee, dies auf Ihrer Liste zu notieren.

Der [Artikel über Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) beschreibt die verschiedenen Arten von Codebeispielen, die wir auf MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API, Ihre anfängliche Liste der zu dokumentierenden Abschnitte könnte wie folgt aussehen:

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfadenseiten
8. Codebeispiele
9. Seitenleisten

Sie können dann mit mehr Details darauf aufbauen, indem Sie jede Schnittstelle und ihre Mitglieder hinzufügen. Wenn Sie zum Beispiel die Web Audio API dokumentieren würden, könnte Ihre Liste so aussehen:

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

## Ein Issue erstellen

Es ist zu diesem Zeitpunkt eine gute Idee, ein Tracking-[Issue](https://github.com/mdn/content/issues) im `mdn/content`-Repository mit den als To-Do (Checkboxen) aufgelisteten Seiten zu eröffnen. Dies ermöglicht nicht nur Ihnen, sondern auch anderen, die an der Dokumentation arbeiten, den Status öffentlich nachzuverfolgen. Sie können Ihre Pull-Requests auch mit diesem Issue verlinken, um allen mehr Kontext zu geben.

## Die Seiten erstellen

Erstellen Sie nun die benötigten Seiten. Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem [Anleitung zum Erstellen, Verschieben, Löschen und Bearbeiten von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Leitfaden an. Schauen Sie sich unseren [Leitfaden für Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) an, um Vorlagen für Seiten zu finden, die nützlich sein könnten.
