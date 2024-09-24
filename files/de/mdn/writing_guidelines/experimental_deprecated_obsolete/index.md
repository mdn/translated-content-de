---
title: Experimentell, veraltet und überflüssig
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Diese Begriffe sind häufig mit Technologien und Spezifikationen verbunden und werden in den MDN Web Docs verwendet, um den Status einer Technologie zu kennzeichnen. Für die Definition dieser Begriffe richten sich die MDN Web Docs nach dem [Browser Compatibility Data (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) Repository. Diese Begriffe werden im Folgenden im Kontext ihrer Nutzung auf den MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie in den MDN Web Docs als experimentell bezeichnet wird, bedeutet dies, dass die Technologie neu und unausgereift ist und sich derzeit _im Prozess_ der Aufnahme in die Webplattform befindet (oder für die Aufnahme in Betracht gezogen wird). Eine Technologie als experimentell zu markieren bedeutet, dass Leser sorgfältig überlegen sollten, bevor sie diese Technologie in einem Produktionsprojekt einsetzen (d.h. ein Projekt, das nicht nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und den Browserherstellern und Standardautoren Feedback zu geben.

Für eine als **experimentell** markierte Technologie gilt eine oder mehrere der folgenden Bedingungen:

- Sie ist in der Release-Version **nur einer** modernen großen Browser Rendering-Engine implementiert und standardmäßig aktiviert.
- Sie wird nur durch Konfigurationsänderungen wie Präferenzen oder Flags unterstützt, unabhängig von der Anzahl der unterstützenden Rendering Engines.
- Ihre definierende Spezifikation wird wahrscheinlich in abwärtskompatiblen (d.h. möglicherweise den bestehenden Code brechenden) Weise erheblich verändert.

> [!NOTE]
> Eine Funktion, die nur auf einer Rendering-Engine veröffentlicht wurde, wird immer noch als experimentell betrachtet, selbst wenn sie in Vorschauversionen anderer Rendering-Engines verfügbar ist (oder durch Setzen einer Präferenz oder eines Flags).

Der **experimentelle** Status einer Technologie kann verfallen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Sie wird standardmäßig in **zwei oder mehr** großen Browser Rendering-Engines unterstützt.
- Sie wird von einer einzelnen Browser Rendering-Engine zwei oder mehr Jahre lang standardmäßig unterstützt und es erfolgen keine größeren Änderungen.
- Die definierende Spezifikation wird wahrscheinlich nicht in einer Weise geändert, die die Kompatibilität bricht.

Für Beispiele zu diesen Bedingungen siehe die BCD-Dokumentation zum [experimentellen Flag](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental).

Normalerweise wird eine Technologie, wenn sie in mehreren großen Browsern unterstützt wird, als stabil angesehen, aber das ist nicht immer der Fall. Auf der anderen Seite haben einige Technologien möglicherweise eine stabile Spezifikation, jedoch keine native Unterstützung in Browsern. Zum Beispiel wird [IMSC](/de/docs/Related/IMSC) über ein JavaScript-Polyfill verwendet. <!-- Link muss überarbeitet werden -->

Eine Funktion oder Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** markiert ist, befindet sich auf einem **Standards Track**.

## Veraltet

Der Begriff **veraltet** wird in den MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder wird nur aus Kompatibilitätsgründen beibehalten und könnte weiterhin funktionieren. Wir empfehlen, die mit veraltet markierte Funktionalität zu vermeiden.

Für weitere Informationen zur Definition von **veraltet**, siehe die BCD-Dokumentation zum [veralteten Flag](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated).

## Überflüssig

In den MDN Web Docs wurde der Begriff **überflüssig** historisch verwendet, um eine API oder Technologie zu kennzeichnen, die nicht nur nicht mehr empfohlen wird, sondern auch nicht mehr in Browsern implementiert ist. Da die Unterscheidung zwischen **überflüssig** und **veraltet** nicht sehr hilfreich ist, verwenden wir den Begriff **überflüssig** in den MDN Web Docs nicht mehr.

> [!NOTE]
> Wenn Sie auf eine Instanz von **überflüssig** stoßen, sollte diese entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal werden während der Entwicklung einer neuen Spezifikation oder im Verlauf der Evolution von lebenden Standards wie HTML neue Elemente, Methoden, Eigenschaften usw. zur Spezifikation hinzugefügt, dort eine Weile gehalten und dann entfernt. Manchmal geschieht dies sehr schnell, und manchmal bleiben diese neuen Elemente Monate oder sogar Jahre in der Spezifikation, bevor sie entfernt werden. Dies kann es schwierig machen, zu entscheiden, wie das Entfernen des Elements aus der Spezifikation gehandhabt werden soll.

Hier sind einige Richtlinien, die Ihnen helfen können, zu entscheiden, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Element" verwendet, um alles zu bedeuten, was Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder eine einzelne Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element _nie_ in einer Release-Version eines _beliebigen_ Browsers implementiert wurde, nicht einmal hinter einer Präferenz oder einem Flag, entfernen Sie alle Referenzen zum Element aus der Dokumentation.

- Wenn das Element Dokumentationsseiten hat, die nur dieses eine Element beschreiben (wie {{domxref("RTCPeerConnection.close()")}}), löschen Sie die Seite. Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies auch, alle Unterseiten zu entfernen, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben.
- Entfernen Sie das Element aus jeder Liste von Eigenschaften, Attributen, Methoden usw. Für Methoden einer Schnittstelle bedeutet dies beispielsweise, es aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle zu entfernen.
- Durchsuchen Sie den Text der Übersichtsseite für diese Schnittstelle, Element usw. nach Referenzen auf das entfernte Element. Entfernen Sie diese Referenzen, achten Sie darauf, keine seltsamen grammatikalischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht, sondern Sätze oder Absätze umgeschrieben werden müssen, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte von Inhalten zu entfernen, wenn die Beschreibung der Nutzung des Elements umfangreich ist.
- Suchen Sie auf ähnliche Weise nach Diskussionen über das Element in den Anleitungen und Tutorials über die relevante API oder Technologie. Entfernen Sie diese Referenzen, wobei Sie darauf achten, keine seltsamen grammatikalischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht, sondern Sätze oder Absätze umgeschrieben werden müssen, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte von Inhalten zu entfernen, wenn die Beschreibung der Nutzung des Elements umfangreich ist.
- Suchen Sie in den MDN Web Docs nach Referenzen auf das entfernte Element, falls es anderswo Diskussionen gibt. Es ist unwahrscheinlich, dass es welche gibt, da es, wenn es nie implementiert wurde, unwahrscheinlich ist, dass es weit diskutiert wird. Entfernen Sie auch diese Erwähnungen.
- Wenn die JSON-Dateien im [Browser Compatibility Data Repository](https://github.com/mdn/browser-compat-data) Daten zu den entfernten Elementen enthalten, löschen Sie diese Objekte aus dem JSON-Code und reichen Sie eine Pull-Anfrage mit dieser Änderung ein, mit einer Erklärung des Grundes in der Commit-Nachricht und der Pull-Anfrage-Beschreibung. Achten Sie darauf, dass Sie die JSON-Syntax dabei nicht brechen.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in einer beliebigen Release-Version eines oder mehrerer Browser, aber _nur_ hinter einer Präferenz oder einem Flag implementiert wurde, löschen Sie das Element nicht sofort aus der Dokumentation. Stattdessen markieren Sie das Element als **veraltet** wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Compat-Data-Repository durch [Einsenden einer Pull-Anfrage](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Suchen Sie den informativen Text der Übersichtsseite für diese Schnittstelle, Element usw. nach Referenzen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnkästen mit Text wie " \[item] wurde aus der Spezifikation entfernt und wird bald aus Browsern entfernt. Siehe \[link zur Seite] für eine neue Möglichkeit, dies zu tun." hinzu.
- Suchen Sie in ähnlicher Weise nach Diskussionen über das Element in den Anleitungen und Tutorials über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Suchen Sie in den MDN Web Docs nach Referenzen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie auch dort ähnliche Warnkästen hinzu.
- Irgendwann in der Zukunft könnte eine Entscheidung getroffen werden, das Element tatsächlich aus der Dokumentation zu entfernen; normalerweise machen wir das nicht, aber wenn das Element speziell ungenutzt oder uninteressant war, könnten wir entscheiden, dies zu tun.
- Aktualisieren Sie alle relevanten Einträge im [Browser Compatibility Data Repository](https://github.com/mdn/browser-compat-data), um die Obsoleszenz der betroffenen Elemente zu reflektieren.

### Wenn das Element in einem Browser ohne Flag implementiert wurde

Wenn das Element in einem oder mehreren Release-Builds von Browsern implementiert wurde, ohne dass eine Präferenz oder ein Flag erforderlich war, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Compat-Data-Repository durch [Einsenden einer Pull-Anfrage](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Suchen Sie den informativen Text der Übersichtsseite für diese Schnittstelle, Element usw. nach Referenzen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnkästen mit Text wie " \[item] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus Browsern entfernt werden, daher sollten Sie es nicht verwenden. Siehe \[link zur Seite] für eine neue Möglichkeit, dies zu tun." hinzu.
- Suchen Sie in ähnlicher Weise nach Diskussionen über das Element in den Anleitungen und Tutorials über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Suchen Sie in den MDN Web Docs nach Referenzen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie auch dort ähnliche Warnkästen hinzu.
- Es ist unwahrscheinlich, dass diese Elemente in absehbarer Zeit, wenn überhaupt, aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser Compatibility Data Repository](https://github.com/mdn/browser-compat-data), um die Veralterung der betroffenen Elemente zu reflektieren.

Bitte verwenden Sie Ihren gesunden Menschenverstand bezüglich der Formulierung von Warnmeldungen und anderen Textänderungen, die in den obigen Richtlinien vorgeschlagen werden. Unterschiedliche Elemente erfordern unterschiedliche Formulierungen und Vorgehensweisen in der Situation. Wenn Sie Zweifel haben, zögern Sie nicht, um Rat in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) zu fragen.

## Richtlinien zur Dokumentation eines Spezifikationskonflikts

Manchmal, aber selten, könnte es einen Konflikt zwischen verschiedenen Spezifikationsversionen geben (normalerweise W3C versus WHATWG). Beispielsweise könnte eine Version ein Feature als veraltet aufführen, während die andere dies nicht tut. In solchen Fällen berücksichtigen Sie, was die Realität ist, d.h., was Browser tatsächlich tun, und schreiben Sie eine "wichtige" Notiz, um den aktuellen Stand zusammenzufassen. Zum Beispiel hatte das globale Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) im Januar 2019 einen Konflikt, der folgendermaßen zusammengefasst wurde: <!--dieses Warnbeispiel für Spezifikationskonflikte existiert auf dieser Seite nicht mehr. Es konnten auch keine anderen Beispiele gefunden werden.-->

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) auf und moderne Browser arbeiten daran, es zu unterstützen. Die [W3C HTML 5.2 Spezifikation](https://html.spec.whatwg.org/multipage/index.html#contents) hingegen führt es nicht mehr auf (d.h. markiert es als überflüssig). Sie sollten die WHATWG-Definition bis zum Erreichen eines Konsenses als korrekt betrachten.

## Siehe auch

- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
