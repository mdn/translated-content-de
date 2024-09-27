---
title: Experimentell, veraltet und obsolet
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Diese Begriffe sind häufig mit Technologien und Spezifikationen verbunden und werden auf MDN Web Docs verwendet, um den Status einer Technologie zu kennzeichnen. Für die Definition dieser Begriffe stimmt MDN Web Docs mit dem [Browser Compatibility Data (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) Repository überein. Diese Begriffe werden unten im Kontext ihrer Verwendung auf MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie auf MDN Web Docs als experimentell beschrieben wird, bedeutet dies, dass die Technologie neu und unreif ist und sich derzeit _im Prozess_ der Aufnahme in die Webplattform befindet (oder für eine Aufnahme in Betracht gezogen wird). Die Kennzeichnung einer Technologie als experimentell weist darauf hin, dass Leser sorgfältig abwägen sollten, bevor sie diese Technologie in einem Produktionsprojekt verwenden (d. h. in einem Projekt, das mehr als nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und Feedback an Browserhersteller und Standardautoren zu geben.

Für eine als **experimentell** gekennzeichnete Technologie gilt eine oder mehrere der folgenden Bedingungen:

- Sie ist nur in der Release-Build-Version von **nur einem** modernen Hauptbrowser-Rendering-Engine implementiert und standardmäßig aktiviert.
- Sie wird nur durch Konfigurationsänderungen wie Einstellungen oder Flags unterstützt, unabhängig von der Anzahl der unterstützten Rendering-Engines.
- Ihre definierende Spezifikation wird wahrscheinlich auf rückwärts inkompatible Weise erheblich geändert (d. h., sie könnte bestehenden Code, der auf die Funktion angewiesen ist, unterbrechen).

> [!NOTE]
> Eine Funktion, die nur in einer Rendering-Engine veröffentlicht wird, wird immer noch als experimentell betrachtet, auch wenn sie in Vorschau-Builds anderer Rendering-Engines verfügbar ist (oder durch Einstellen einer Präferenz oder eines Flags).

Der **experimentelle** Status einer Technologie kann ablaufen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Sie wird standardmäßig in **zwei oder mehr** Hauptbrowser-Rendering-Engines unterstützt.
- Sie wird standardmäßig von einer einzigen Browser-Rendering-Engine für zwei oder mehr Jahre unterstützt und erfährt keine wesentlichen Änderungen.
- Ihre definierende Spezifikation wird wahrscheinlich nicht auf eine Weise geändert, die die Kompatibilität unterbricht.

Beispiele für diese Bedingungen finden Sie in der [experimental flag](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) BCD-Dokumentation.

Normalerweise ist die Spezifikation stabil, wenn eine Technologie in mehreren wichtigen Browsern unterstützt wird, aber das ist nicht immer der Fall. Andererseits könnten einige Technologien eine stabile Spezifikation haben, aber keine native Unterstützung in Browsern. [IMSC](/de/docs/Related/IMSC) zum Beispiel wird über ein JavaScript-Polyfill verwendet.

Eine Funktion oder Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** gekennzeichnet ist, befindet sich auf einem **Standards Track**.

## Veraltet

Der Begriff **veraltet** wird in den MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder nur aus Kompatibilitätsgründen beibehalten werden und dennoch funktionieren. Wir empfehlen, die als veraltet markierte Funktionalität zu vermeiden.

Weitere Informationen zur Definition von **veraltet** finden Sie in der [deprecated flag](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated) BCD-Dokumentation.

## Obsolet

In den MDN Web Docs wurde der Begriff **obsolet** historisch verwendet, um eine API oder Technologie zu kennzeichnen, die nicht nur nicht mehr empfohlen wird, sondern auch nicht mehr in Browsern implementiert ist. Da der Unterschied zwischen **obsolet** und **veraltet** nicht sehr hilfreich ist, verwenden wir den Begriff **obsolet** nicht mehr in den MDN Web Docs.

> [!NOTE]
> Wenn Sie auf eine Instanz von **obsolet** stoßen, sollte sie entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal werden während der Entwicklung einer neuen Spezifikation oder im Verlauf der Entwicklung von lebenden Standards wie HTML neue Elemente, Methoden, Eigenschaften usw. zur Spezifikation hinzugefügt, dort für eine Weile behalten und dann entfernt. Manchmal geschieht dies sehr schnell und manchmal bleiben diese neuen Elemente monatelang oder sogar jahrelang in der Spezifikation, bevor sie entfernt werden. Dies kann es schwierig machen, zu entscheiden, wie der zu entfernende Artikel aus der Spezifikation behandelt werden soll.

Hier sind einige Richtlinien, die Ihnen helfen sollen, zu entscheiden, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Artikel" verwendet, um irgendetwas zu bedeuten, das Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder eine einzelne Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element _niemals_ in einer Release-Version _eines beliebigen_ Browsers, nicht einmal hinter einer Einstellung oder einem Flag, implementiert wurde, löschen Sie alle Verweise auf das Element aus der Dokumentation.

- Wenn das Element über irgendwelche Dokumentationsseiten verfügt, die nur dieses eine Element beschreiben (wie z. B. [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close)), löschen Sie diese Seite. Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies, dass alle Unterseiten, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben, ebenfalls entfernt werden.
- Entfernen Sie das Element aus allen Listen von Eigenschaften, Attributen, Methoden usw. Bei Methoden einer Schnittstelle bedeutet dies z. B., es aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle zu entfernen.
- Suchen Sie im Text der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach allen Verweisen auf das entfernte Element. Entfernen Sie diese Verweise und achten Sie darauf, keine seltsamen grammatikalischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht werden, sondern auch ein Satz oder Absatz neu formuliert wird, um mehr Sinn zu machen. Es kann auch bedeuten, dass ganze Abschnitte von Inhalten entfernt werden, wenn die Beschreibung der Verwendung des Artikels lang ist.
- Suchen Sie ebenfalls nach einer Diskussion des Elements in den Leitfäden und Anleitungen über die relevante API oder Technologie. Entfernen Sie diese Verweise und achten Sie darauf, keine seltsamen grammatikalischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht werden, sondern auch ein Satz oder Absatz neu formuliert wird, um mehr Sinn zu machen. Es kann auch bedeuten, dass ganze Abschnitte von Inhalten entfernt werden, wenn die Beschreibung der Verwendung des Artikels lang ist.
- Suchen Sie in MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Es ist unwahrscheinlich, dass es welche gibt, da es, wenn es nie implementiert wurde, unwahrscheinlich ist, dass es weit verbreitet diskutiert wurde. Entfernen Sie auch diese Erwähnungen.
- Wenn die JSON-Dateien im [Browser Compatibility Data Repository](https://github.com/mdn/browser-compat-data) Daten für die entfernten Elemente enthalten, löschen Sie diese Objekte aus dem JSON-Code und reichen Sie einen Pull-Request mit dieser Änderung ein, wobei Sie den Grund in der Commit-Nachricht und der Pull-Request-Beschreibung erklären. Achten Sie darauf, dass Sie dabei nicht die JSON-Syntax unterbrechen.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in einer Release-Version eines oder mehrerer Browser implementiert wurde, aber _nur_ hinter einer Einstellung oder einem Flag, löschen Sie das Element nicht sofort aus der Dokumentation. Markieren Sie stattdessen das Element als **veraltet** wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Compat-Data-Repository, indem Sie [einen Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Suchen Sie im erläuternden Text der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach allen Verweisen auf das entfernte Element. Fügen Sie Warnfelder an geeigneten Stellen mit Texten wie "\[Artikel] wurde aus der Spezifikation entfernt und wird bald aus Browsern entfernt. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun." hinzu.
- Suchen Sie ebenfalls nach einer Diskussion des Elements in den Leitfäden und Anleitungen über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Durchsuchen Sie die MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnfelder hinzu.
- Irgendwann in der Zukunft könnte eine Entscheidung getroffen werden, das Element tatsächlich aus der Dokumentation zu entfernen; normalerweise tun wir dies nicht, aber wenn das Element besonders ungenutzt oder uninteressant war, könnten wir uns dazu entscheiden.
- Aktualisieren Sie alle relevanten Einträge im [Browser Compatibility Data Repository](https://github.com/mdn/browser-compat-data), um die Obsoleszenz der betroffenen Elemente widerzuspiegeln.

### Wenn das Element in einem Browser ohne ein Flag implementiert wurde

Wenn das Element in einer oder mehreren Release-Versionen von Browsern implementiert wurde, ohne dass eine Einstellung oder ein Flag erforderlich ist, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Compat-Data-Repository, indem Sie [einen Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Suchen Sie im erläuternden Text der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach allen Verweisen auf das entfernte Element. Fügen Sie Warnfelder an geeigneten Stellen mit Texten wie "\[Artikel] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus Browsern entfernt werden, daher sollten Sie es nicht verwenden. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun." hinzu.
- Suchen Sie ebenfalls nach einer Diskussion des Elements in den Leitfäden und Anleitungen über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Durchsuchen Sie die MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnfelder hinzu.
- Es ist unwahrscheinlich, dass diese Elemente in absehbarer Zeit, wenn überhaupt, aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser Compatibility Data Repository](https://github.com/mdn/browser-compat-data), um die Deprecation der betroffenen Elemente widerzuspiegeln.

Bitte verwenden Sie gesunden Menschenverstand bei der Formulierung von Warnmeldungen und anderen Änderungen, die in den oben genannten Richtlinien vorgeschlagen werden. Verschiedene Elemente erfordern unterschiedliche Formulierungen und Handhabung der Situation. Wenn Sie unsicher sind, können Sie sich gerne in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) um Rat fragen.

## Richtlinien zur Dokumentation eines Spezifikationskonflikts

Manchmal, aber selten, kann es zu einem Konflikt zwischen verschiedenen Spezifikationsversionen kommen (in der Regel W3C vs. WHATWG). Zum Beispiel könnte in einer Version eine Funktion als veraltet aufgeführt sein, während in der anderen nicht. In solchen Fällen ziehen Sie in Betracht, was die Realität ist, d. h., was Browser tatsächlich tun, und schreiben Sie eine "wichtige" Anmerkung, um den neuesten Status zusammenzufassen. Zum Beispiel hatte das globale Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) im Januar 2019 einen Konflikt, der folgendermaßen zusammengefasst wurde:

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) und moderne Browser arbeiten daran, es zu unterstützen. Die [W3C HTML 5.2 Spezifikation](https://html.spec.whatwg.org/multipage/index.html#contents) hingegen listet es nicht mehr auf (d. h., es wird als obsolet markiert). Sie sollten die Definition von WHATWG als korrekt betrachten, bis ein Konsens erreicht ist.

## Siehe auch

- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
