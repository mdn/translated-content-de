---
title: Experimentell, veraltet und obsolet
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Diese Begriffe werden häufig im Zusammenhang mit Technologien und Spezifikationen verwendet und auf MDN Web Docs genutzt, um den Status einer Technologie zu kennzeichnen. Für die Definition dieser Begriffe richtet sich MDN Web Docs nach dem [Browser-Compatibility-Data (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) Repository.
Diese Begriffe werden im Folgenden im Zusammenhang mit ihrer Verwendung auf MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie auf MDN Web Docs als experimentell beschrieben wird, bedeutet dies, dass die Technologie neu und unreif ist und sich derzeit _im Prozess_ befindet, zur Webplattform hinzugefügt zu werden (oder die Hinzufügung in Erwägung gezogen wird).
Das Markieren einer Technologie als experimentell weist darauf hin, dass Leser sorgfältig überlegen sollten, bevor sie diese Technologie in irgendeinem Produktionsprojekt verwenden (d.h. ein Projekt, das nicht nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und Feedback an Browserhersteller und Standardautoren zu geben.

Für eine Technologie, die als **experimentell** gekennzeichnet ist, gelten eine oder mehrere der folgenden Bedingungen:

- Sie ist in der Veröffentlichungsversion von **nur einem** modernen Hauptbrowser-Rendering-Engine implementiert und standardmäßig aktiviert.
- Sie wird nur durch Konfigurationsänderungen wie Einstellungen oder Flags unterstützt, unabhängig von der Anzahl der unterstützten Rendering-Engines.
- Ihre definierende Spezifikation wird wahrscheinlich in rückwärts inkompatibler Weise signifikant verändert werden (d.h., sie kann bestehenden Code, der von der Funktion abhängig ist, brechen).

> [!NOTE]
> Eine Funktion, die nur in einer Rendering-Engine veröffentlicht ist, wird als experimentell betrachtet, selbst wenn sie in Vorschauversionen anderer Rendering-Engines verfügbar ist (oder durch Festlegen einer Einstellung oder eines Flags).

Der **experimentelle** Status einer Technologie kann ablaufen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Sie wird standardmäßig in **zwei oder mehr** Hauptbrowser-Rendering-Engines unterstützt.
- Sie wird standardmäßig von einer einzelnen Browser-Rendering-Engine für zwei oder mehr Jahre unterstützt und es gibt keine größeren Änderungen.
- Ihre definierende Spezifikation wird wahrscheinlich nicht so geändert, dass die Kompatibilität beeinträchtigt wird.

Für Beispiele dieser Bedingungen siehe die [Experimentelle Flagge](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) BCD-Dokumentation.

In der Regel wird, wenn eine Technologie in mehreren Hauptbrowsern unterstützt wird, die Spezifikation stabil sein, aber dies ist nicht immer der Fall.
Andererseits können einige Technologien eine stabile Spezifikation haben, aber keine native Unterstützung in Browsern. [IMSC](/de/docs/Related/IMSC) wird zum Beispiel über ein JavaScript-Polyfill verwendet.

Eine Funktion oder Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** gekennzeichnet ist, wird als **Standardschiene** bezeichnet.

## Veraltet

Der Begriff **veraltet** wird auf MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder nur aus Kompatibilitätsgründen beibehalten werden und könnte trotzdem noch funktionieren. Wir empfehlen, die als veraltet gekennzeichnete Funktionalität zu vermeiden.

Für weitere Informationen zur Definition von **veraltet** siehe die [Veraltete Flagge](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated) BCD-Dokumentation.

## Obsolet

Auf MDN Web Docs wurde der Begriff **obsolet** historisch verwendet, um eine API oder Technologie anzuzeigen, die nicht nur nicht mehr empfohlen, sondern auch nicht mehr in Browsern implementiert ist.
Da der Unterschied zwischen **obsolet** und **veraltet** nicht sehr hilfreich ist, verwenden wir den Begriff **obsolet** auf MDN Web Docs nicht mehr.

> [!NOTE]
> Wenn Sie auf Instanzen von **obsolet** stoßen, sollten diese entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal werden im Zuge der Entwicklung einer neuen Spezifikation oder im Rahmen der Evolution von lebenden Standards wie HTML neue Elemente, Methoden, Eigenschaften usw. in die Spezifikation aufgenommen, dort eine Weile beibehalten und dann entfernt. Manchmal geschieht dies sehr schnell, und manchmal bleiben diese neuen Elemente monatelang oder sogar Jahre lang in der Spezifikation, bevor sie entfernt werden. Dies kann es schwierig machen zu entscheiden, wie das Entfernen des Elements aus der Spezifikation gehandhabt werden soll.

Hier sind einige Richtlinien, die Ihnen bei der Entscheidung helfen, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Element" verwendet, um alles zu bedeuten, was Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder eine einzelne Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element _nie_ in einer Veröffentlichungsversion eines _beliebigen_ Browsers implementiert wurde, nicht einmal hinter einer Präferenz oder einem Flag, löschen Sie alle Verweise auf das Element aus der Dokumentation.

- Wenn das Element Dokumentationsseiten hat, die nur dieses eine Element beschreiben (wie [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close)), löschen Sie diese Seite.
  Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies, dass auch alle Unterseiten entfernt werden, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben.
- Entfernen Sie das Element aus allen Listen von Eigenschaften, Attributen, Methoden usw. Für Methoden einer Schnittstelle bedeutet dies z.B., dass sie aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle entfernt werden.
- Durchsuchen Sie den Text der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach allen Verweisen auf das entfernte Element. Entfernen Sie diese Verweise, und achten Sie darauf, keine seltsamen Grammatikprobleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht, sondern auch ein Satz oder Absatz umgeschrieben wird, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte von Inhalten zu entfernen, wenn die Beschreibung der Verwendung des Elements langwierig ist.
- Suchen Sie ebenso nach Diskussionen über das Element in den Leitfäden und Tutorials zu der relevanten API oder Technologie. Entfernen Sie diese Verweise und achten Sie darauf, keine seltsamen Grammatikprobleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht, sondern auch ein Satz oder Absatz umgeschrieben wird, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte von Inhalten zu entfernen, wenn die Beschreibung der Verwendung des Elements langwierig ist.
- Durchsuchen Sie MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Es ist unwahrscheinlich, dass es welche gibt, da es, wenn es nie implementiert wurde, wahrscheinlich nicht weit verbreitet diskutiert wird. Entfernen Sie diese Erwähnungen ebenfalls.
- Wenn die JSON-Dateien im [Browser-Compatibility-Data Repository](https://github.com/mdn/browser-compat-data) Daten für die entfernten Elemente enthalten, löschen Sie diese Objekte aus dem JSON-Code und reichen Sie eine Pull Request mit dieser Änderung ein, indem Sie den Grund in der Commit-Nachricht und der Pull-Request-Beschreibung erklären. Achten Sie darauf, die JSON-Syntax bei dieser Aktion nicht zu brechen.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in einer Veröffentlichungsversion von einem oder mehreren Browsern, aber _nur_ hinter einer Präferenz oder einem Flag implementiert wurde, löschen Sie das Element nicht sofort aus der Dokumentation. Markieren Sie das Element stattdessen als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Compat-Data-Repository durch [Einreichen einer Pull-Request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den Informationstext der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach allen Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnhinweise hinzu mit Texten wie: "\[Element] wurde aus der Spezifikation entfernt und wird bald aus den Browsern entfernt. Sehen Sie \[Link zur Seite] für eine neue Vorgehensweise."
- Suchen Sie ebenso nach Diskussionen über das Element in den Leitfäden und Tutorials zu der relevanten API oder Technologie. Fügen Sie ähnliche Warnhinweise hinzu.
- Durchsuchen Sie MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie auch dort ähnliche Warnhinweise hinzu.
- Zu einem späteren Zeitpunkt kann entschieden werden, das Element tatsächlich aus der Dokumentation zu entfernen; dies tun wir normalerweise nicht, aber wenn das Element besonders ungenutzt oder uninteressant war, kann beschlossen werden, dies zu tun.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Compatibility-Data-Repository](https://github.com/mdn/browser-compat-data), um die Obsoleszenz der betroffenen Elemente widerzuspiegeln.

### Wenn das Element in einem Browser ohne Flag implementiert wurde

Wenn das Element in einer oder mehreren Veröffentlichungsversionen von Browsern ohne erforderlichen Präferenz- oder Flageinsatz implementiert wurde, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Compat-Data-Repository durch [Einreichen einer Pull-Request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den Informationstext der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach allen Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnhinweise hinzu mit Texten wie: "\[Element] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus den Browsern entfernt werden, daher sollten Sie es nicht verwenden. Sehen Sie \[Link zur Seite] für eine neue Vorgehensweise."
- Suchen Sie ebenso nach Diskussionen über das Element in den Leitfäden und Tutorials zu der relevanten API oder Technologie. Fügen Sie ähnliche Warnhinweise hinzu.
- Durchsuchen Sie MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie auch dort ähnliche Warnhinweise hinzu.
- Es ist unwahrscheinlich, dass diese Elemente bald, wenn überhaupt, aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Compatibility-Data-Repository](https://github.com/mdn/browser-compat-data), um die Veralterung der betroffenen Elemente widerzuspiegeln.

Bitte verwenden Sie gesunden Menschenverstand bei der Formulierung von Warnmeldungen und anderen im obigen Leitfaden vorgeschlagenen Textänderungen.
Verschiedene Elemente erfordern unterschiedliche Formulierungen und Umgang mit der Situation.
Im Zweifelsfall zögern Sie nicht, Rat in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) einzuholen.

## Richtlinien zur Dokumentation eines Spezifikationskonflikts

Manchmal, wenn auch selten, kann es zu einem Konflikt zwischen verschiedenen Spezifikationsversionen kommen (gewöhnlich W3C gegen WHATWG). Zum Beispiel könnte eine Version eine Funktion als veraltet aufführen, während die andere dies nicht tut.
In solchen Fällen sollten Sie die Realität betrachten, das heißt, was Browser tatsächlich tun, und eine "wichtige" Notiz schreiben, um diesen neuesten Status zusammenzufassen.
Zum Beispiel gab es im Januar 2019 einen Konflikt beim globalen Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode), der wie folgt zusammengefasst wurde:

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) auf, und moderne Browser arbeiten daran, es zu unterstützen.
> Die [W3C HTML 5.2-Spezifikation](https://html.spec.whatwg.org/multipage/index.html#contents) listet es jedoch nicht mehr auf (d.h. sie ist als obsolet markiert).
> Sie sollten die WHATWG-Definition als korrekt betrachten, bis ein Konsens erreicht wird.

## Siehe auch

- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
