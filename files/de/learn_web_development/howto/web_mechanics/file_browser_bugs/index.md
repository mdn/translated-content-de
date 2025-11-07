---
title: Wann und wie man Fehler bei Browsern meldet
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Browser sind Software, und wie jede Software können sie Fehler haben. Manchmal stellen Sie möglicherweise fest, dass die Website, die Sie entwickeln, sich nicht wie erwartet oder wie in der Dokumentation angegeben verhält, z. B. in der MDN-Dokumentation oder in den Spezifikationen. Dies könnte entweder auf einen Fehler in Ihrem Code, einen Fehler in der Dokumentation (hoffen wir mal nicht!) oder einen Fehler im Browser, den Sie zum Testen Ihrer Website verwenden, hinweisen. In diesem Artikel besprechen wir, wie Sie herausfinden, was der Grund ist und wie Sie einen Fehler melden, wenn sich herausstellt, dass es ein Problem im Browser ist.

## Wessen Fehler ist es?

Bevor Sie einen Browser-Fehler melden, sollten Sie bestätigen, dass es tatsächlich ein Fehler im Browser ist. Das Problem könnte aus einem von vier Bereichen stammen: Ihrem Code, der Dokumentation, dem Browser oder der Spezifikation. Es ist wichtig, die anderen Möglichkeiten auszuschließen, bevor Sie einen Fehler an den Browser melden. Im Allgemeinen sind Spezifikationen die glaubwürdigste Quelle von allen; Browser und Dokumentationen folgen beide den Spezifikationen, können jedoch trotzdem Fehler haben. Was Ihren Code betrifft ... nun, es ist immer gut, Tippfehler und logische Fehler noch einmal zu überprüfen, bevor Sie annehmen, dass es ein Browser-Fehler ist.

### Ein Testfall erstellen

Der erste Schritt, um die Quelle des Problems zu identifizieren, besteht darin, einen minimalen Testfall zu erstellen, der den Fehler reproduziert. Er sollte klein und eigenständig sein, vorzugsweise eine einzelne HTML-Datei mit eingebettetem CSS und JavaScript, ohne externe Abhängigkeiten oder nicht relevantes Code. Dies ist aus zwei Gründen nützlich:

- Es minimiert die Möglichkeit, dass das Problem durch Ihren eigenen Code oder eine externe Abhängigkeit verursacht wird.
- Sie müssen ohnehin einen bereitstellen, wenn Sie es mit jemandem besprechen möchten—zum Beispiel beim Melden eines Fehlers.

Zum Beispiel wäre das folgende ein guter Testfall für einen Fehler im Zusammenhang mit der {{cssxref(":autofill")}} Pseudo-Klasse. Beachten Sie, wie wir auf das Nötigste reduziert haben, was bedeutet, dass wir auf Best Practices wie das Einfügen des Doctypes, der `<head>` und `<body>` Tags oder Labels für Eingaben verzichten. Das ist in Ordnung, da der relevante Code immer noch vorhanden ist.

```html
<style>
  :autofill {
    border: 3px solid darkorange;
  }
</style>
<input id="name" name="name" type="text" autocomplete="name" />
<input id="email" name="email" type="email" autocomplete="email" />
```

### Ihren Code testen

Sie können Ihren HTML-Code entweder lokal speichern und [ihn über einen Testserver bereitstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) oder einen Onlinedienst wie [JSFiddle](https://jsfiddle.net/) oder [CodePen](https://codepen.io/) verwenden, um eine Live-Demo zu erstellen.

Der einfachste Weg, um zu testen, ob es sich um einen Browser-Fehler handelt, besteht darin, Ihren Testfall in [mehreren Browsern](/de/docs/Learn_web_development/Extensions/Testing/Introduction) zu öffnen. Wenn Sie unterschiedliche Verhaltensweisen zwischen den Browsern feststellen, ist es wahrscheinlicher, dass es sich um einen Browser-Fehler handelt.

> [!NOTE]
> Es gibt andere Schritte, die Sie unternehmen können, um das Problem einzugrenzen, wie das Testen in einem privaten Fenster, das Deaktivieren von Erweiterungen oder das Löschen des Caches. Diese sollten Sie ebenfalls ausprobieren, bevor Sie den Fehler melden.

### Implementierungsstatus überprüfen

Beginnen Sie damit, der Dokumentation zu vertrauen und den Browser zu untersuchen, dessen Verhalten nicht dazu passt. Nicht alle unerwarteten Verhaltensweisen sind Fehler. Manchmal können Browser ein Feature oder Verhalten implementieren, das noch nicht in die Spezifikation aufgenommen wurde, was daher weniger wahrscheinlich dokumentiert ist. Eine andere Möglichkeit ist, dass ein Feature in der Spezifikation beschrieben wird, aber noch in keinem Browser implementiert ist, was ebenfalls bedeutet, dass es möglicherweise nicht dokumentiert ist.

Zu diesem Zeitpunkt sollten Sie mehr Quellen überprüfen, um die Implementierungsgeschichte zu bestimmen. Hier sind einige Orte, die Sie sich ansehen können:

- **MDNs Browser-Kompatibilitätstabellen**: Im Abschnitt "Browser-Kompatibilität" auf unseren Referenzseiten (zum Beispiel prüfen Sie [diesen Abschnitt](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#browser_compatibility) auf der `shape()` CSS-Funktionsseite), finden Sie Informationen darüber, welche Browser ein Feature unterstützen und in welchem Umfang. Dies kann darauf hindeuten, dass ein Feature in Ihrem Zielbrowser nicht implementiert ist oder nur teilweise (also mit bekannten Fehlern oder Einschränkungen) implementiert ist.
- **Spezifikations-Repositories**: Standardisierungsorganisationen wie [WHATWG](https://github.com/whatwg) (für DOM, HTML, fetch und mehr), [CSSWG](https://github.com/w3c/csswg-drafts) (für CSS) und [TC39](https://github.com/tc39) (für JavaScript) arbeiten öffentlich auf GitHub. Sie können überprüfen, ob eine Spezifikation kürzlich geändert wurde oder ob es ein offenes Problem zu dem von Ihnen getesteten Feature gibt.
- **Community-Foren**: Die [MDN-Community](/de/docs/MDN/Community/Communication_channels) ist ein großartiger Ausgangspunkt, ebenso wie andere Webentwicklungs-Foren. Diese sind gute Orte, um Fragen zu stellen, ob etwas in den Browsern noch nicht implementiert wurde oder ob ein bekannter Fehler vorliegt.
- **Fehlerverfolgung für den von Ihnen getesteten Browser**: Wenn Sie feststellen, dass ein Problem im Zusammenhang mit Ihrem Problem bereits gemeldet wurde, bestätigt das, dass der Fehler real ist, und es gibt nichts weiter, was Sie tun müssen. Tatsächlich werden wir als Nächstes auf die Fehlerverfolgung eingehend eingehen.

Natürlich, selbst wenn alle Browser gleich reagieren, könnte immer noch ein Fehler in allen von ihnen vorhanden sein, oder vielleicht implementiert nur ein einzelner Browser das beabsichtigte Verhalten. Dokumentation kann veraltet oder fehlerhaft sein. Um sicherzugehen, sollten Sie die Spezifikation als die wesentliche Quelle der Wahrheit ansehen (außer im seltenen Fall, dass Browser Dinge vor der Spezifikation umsetzen). Auf jeder MDN-Referenzseite finden Sie Links zu den relevanten Spezifikationen im Abschnitt "Spezifikationen" (siehe dieses [Beispiel](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#specifications)). Lesen Sie die Spezifikation, um zu überprüfen, wie das Verhalten sein sollte. Manchmal können Spezifikationen schwer verständlich sein, da sie für Browser-Ingenieure bestimmt sind, aber versuchen Sie Ihr Bestes.

Wenn sich herausstellt, dass alle Browser und die Spezifikation konsistent sind, aber MDN falsch ist, ziehen Sie in Betracht, [beizutragen](/de/docs/MDN/Community/Getting_started)!

## Fehlermelder für Browser

Jeder Browser hat seinen eigenen Fehlermelder, in dem Sie nach bestehenden Fehlern suchen und neue melden können. Die Benutzeroberfläche und der Prozess können sich zunächst etwas ungewohnt anfühlen, aber es gibt in der Regel Anweisungen. Die folgende Tabelle listet die Fehlermelder für die wichtigsten Browser auf:

| Browser         | Fehlermelder                                          |
| --------------- | ----------------------------------------------------- |
| Apple Safari    | [WebKit Bugzilla](https://webkit.org/reporting-bugs/) |
| Google Chrome   | [Chromium Issues](https://issues.chromium.org/issues) |
| Mozilla Firefox | [Mozilla Bugzilla](https://bugzilla.mozilla.org/)     |
| Opera           | [Opera Bug Wizard](https://bugs.opera.com/wizard/)    |

Suchen Sie nach bereits vorhandenen Fehlerberichten, bevor Sie einen neuen einreichen. Wenn Sie einen vorhandenen Fehlerbericht finden, der Ihrem Problem entspricht, können Sie einen Kommentar mit Ihren Erkenntnissen hinzufügen (zum Beispiel, wenn Sie einen Workaround gefunden haben oder wenn Sie mehr Informationen über den Fehler haben). Fügen Sie jedoch keine Kommentare wie "Ich habe diesen Fehler auch gefunden" hinzu, da sie keinen wirklichen Mehrwert bieten. Wenn Sie keinen vorhandenen Fehler finden, können Sie einen neuen einreichen—jemand wird Ihnen mitteilen, ob es sich um ein Duplikat handelt.

Beim Einreichen eines neuen Fehlers stellen Sie sicher, dass Sie Ihren minimalen Testfall und alle anderen Informationen, die das Formular anfragt, wie z. B. Browserversion, erwartete vs. tatsächliche Ergebnisse und Screenshots, beifügen. Einige Fehlermelder verlangen möglicherweise auch, dass Sie eine Komponente oder Kategorie für den Fehler auswählen, wie Rendern oder Netzwerk. Die Browserentwickler verwenden diese Labels zur Organisation der Arbeit. Wenn Sie unsicher sind, was Sie wählen sollen, treffen Sie Ihre beste Schätzung—jemand wird es bei Bedarf neu zuordnen.

## Fehler für nicht-browserbezogene Software melden

Wenn der Fehler mit anderer Software zusammenhängt, die möglicherweise mit dem Browser integriert ist, müssen Sie den Fehler beim entsprechenden Softwareanbieter melden. Die folgende Tabelle listet einige unterstützende Technologien und die Stellen, an denen Sie Fehler melden können:

| Software                                                                             | Wo man Fehler melden kann                                                             |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [Freedom Scientific JAWS](https://www.freedomscientific.com/products/software/jaws/) | [JAWS Tech-Support-Formular](https://support.freedomscientific.com/Forms/TechSupport) |
| [Non Visual Desktop Access (NVDA)](https://www.nvaccess.org/)                        | [NVDA-Fehler melden](https://github.com/nvaccess/nvda)                                |
