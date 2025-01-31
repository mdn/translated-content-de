---
title: Anleitung zur Recherche einer Technologie
short-title: Eine Technologie recherchieren
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieser Artikel gibt Ihnen nützliche Informationen darüber, wie Sie Technologien dokumentieren können.

## Vorbereitungsarbeit

Bevor Sie beginnen, etwas auf MDN Web Docs zu dokumentieren oder zu aktualisieren, sollten Sie einige Dinge vorbereiten und planen, bevor Sie tatsächlich mit dem Schreiben beginnen.

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens ein angemessenes Wissen über Folgendes haben:

- Webtechnologien wie HTML, CSS und JavaScript.
- Das Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig betrachten, während Sie APIs dokumentieren.

Alles Weitere kann im Laufe der Zeit erlernt werden.

### Ressourcen überprüfen

Nützliche Ressourcen für das Schreiben jeglicher Dokumentation beinhalten:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie sind bereits hier, aber es ist gut, alle Artikel zu durchsuchen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und den enthaltenen Abschnitten sowie den verschiedenen Möglichkeiten, wie wir unterschiedliche Teile der Seite einbeziehen (wie Spezifikationen und Browser-Kompatibilität), vertraut zu machen.
2. Die neueste Spezifikation: Verschiedene Standardisierungsorganisationen erstellen Spezifikationen für Technologien, die auf MDN Web Docs dokumentiert sind. Zum Beispiel [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und die [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Spezifikationen sind auf Referenzseiten auf MDN Web Docs verlinkt (prüfen Sie den Abschnitt "Spezifikationen"). Alternativ können Sie normalerweise eine Websuche durchführen. Arbeiten Sie immer mit der neuesten, aktuellsten Spezifikation.
3. Die neuesten modernen Webbrowser: Diese sollten experimentelle/Alpha-Versionen wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/) sein, die eher die Funktionen unterstützen, die Sie dokumentieren. Dies ist besonders relevant, wenn Sie eine Funktion dokumentieren, die "bevorstehend" ist.
4. Demos/Blog-Beiträge/weitere Informationen: Finden Sie so viele Informationen wie möglich. Wenn Sie eine Technologie aktualisieren, weil sie sich verändert hat, stellen Sie sicher, dass die Ressourcen, die Sie verwenden, um zu lernen, nicht veraltet sind. Dies ist der Grund, warum die ersten beiden Punkte oben wichtig sind.

Es kann auch klug sein, jemanden zu finden, der Ihnen bei Fragen helfen kann. Dies können die Autoren der Spezifikation oder die Ingenieure sein, die Browserfunktionen implementieren.

### Spezifikationen lesen

Das kann sich anfangs etwas ungewohnt anfühlen, aber je mehr Sie es tun, desto mehr gewöhnen Sie sich daran. Hier sind einige gute Links, um Ihnen den Einstieg zu erleichtern:

- [How to read W3C specs](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart.
- [Understanding the CSS specifications](https://www.w3.org/Style/CSS/read) von der W3C.
- [How to read web specs part I – or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) behandelt speziell das Lesen der WebVR-Spezifikation, ist aber eine großartige Einführung in das Lesen von Web-API-Spezifikationen.
- [How to read web specs part IIa – or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) der zweite Teil des obenstehenden Links enthält Informationen zum Verständnis der ECMAScript-Spezifikation, die die JavaScript-Sprache umreißt.

Zusätzlich haben wir den [Information enthalten in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file) Leitfaden, der wirklich helfen kann, wenn Sie Web-API-Spezifikationen lesen.

## Die Funktion erkunden

Sie werden im Laufe der Dokumentation einer Technologie immer wieder zu Codebeispielen zurückkehren oder Demos erstellen, aber es ist sehr nützlich, damit zu beginnen, sich mit der Funktionsweise der Technologie vertraut zu machen. Dies ist eine wirklich wertvolle Übung, da sie Ihnen ein gutes Verständnis der Anwendungsfälle (warum ein Entwickler diese Technologie verwenden würde) und gleichzeitig bei der Erstellung einiger Codebeispiele gibt.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass zum Beispiel eine Methode jetzt anders definiert ist, aber die alte Methode in Browsern weiterhin funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf Demos, die Sie gefunden haben, oder fragen Sie einen Ingenieurkontakt.

## Erstellen der Liste der Seiten, die geschrieben oder aktualisiert werden sollen

Die verschiedenen Seiten, die Sie von Grund auf neu schreiben oder aktualisieren müssen, variieren je nach der Technologie, über die Sie schreiben. Sehen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den relevanten Abschnitt für die Technologie an, die Sie dokumentieren. Sie müssen höchstwahrscheinlich auch die bestehende Dokumentation aktualisieren, also durchsuchen Sie die MDN Web Docs nach Seiten, die mit dem, worüber Sie schreiben, in Zusammenhang stehen.

### Seitenleisten

Es ist möglich, dass die Seitenleiste der Seiten, die Sie schreiben, ebenfalls definiert oder aktualisiert werden muss. Um herauszufinden, ob dies notwendig ist und wie Sie es tun können, schauen Sie in den [Seitenleisten-Leitfaden](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).

### Codebeispiele

Einige der Codebeispiele für MDN Web Docs befinden sich in separaten Repositories. Am bemerkenswertesten sind dies die interaktiven Beispiele, die im "Probiere es"-Abschnitt auf den Referenzseiten erscheinen, und der größere Democode, der für Leitfäden benötigt wird. Wenn Sie eines dieser Repositories hinzufügen oder ändern müssen, ist es eine gute Idee, dies in Ihrer Liste zu notieren.

Der [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) Artikel beschreibt die verschiedenen Arten von Codebeispielen, die wir auf MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API, Ihre anfängliche Liste von zu dokumentierenden Abschnitten könnte folgendermaßen aussehen:

1. Überblicksseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Codebeispiele
9. Seitenleisten

Sie können diese Liste dann mit mehr Details erweitern, indem Sie jede Schnittstelle und ihre Mitglieder hinzufügen. Wenn Sie zum Beispiel die Web Audio API dokumentieren würden, könnte Ihre Liste eher so aussehen:

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

## Öffnen eines Issues

Es ist eine gute Idee, an diesem Punkt ein [Issue](https://github.com/mdn/content/issues) im `mdn/content` Repository zu eröffnen, mit den Seiten, die als Aufgabenliste (Checkboxen) aufgelistet sind. Dies ermöglicht es nicht nur Ihnen, sondern auch anderen, die an der Dokumentation arbeiten, den Status öffentlich zu verfolgen. Sie können auch Ihre Pull-Requests mit diesem Issue verlinken, um allen mehr Kontext zu geben.

## Erstellen der Seiten

Erstellen Sie nun die Seiten, die Sie benötigen. Um eine neue Seite zu erstellen, sehen Sie sich die Anleitungen in unserem [Wie man Seiten erstellt, verschiebt, löscht und bearbeitet](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Leitfaden an. Schauen Sie sich unseren [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) Leitfaden für Seitentemplates an, die nützlich sein können.
