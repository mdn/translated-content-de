---
title: Wann und wie man Fehler bei Browsern meldet
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
l10n:
  sourceCommit: cab1109a0c225299a9fb2b3402bcd4a1931b8ab7
---

Browser sind Software und wie jede Software können sie Fehler haben. Manchmal stellen Sie möglicherweise fest, dass die Website, die Sie entwickeln, nicht wie erwartet oder wie in der Dokumentation, wie etwa auf MDN oder den Spezifikationen, beschrieben reagiert. Dies könnte entweder auf einen Fehler in Ihrem Code, einen Fehler in der Dokumentation (hoffentlich nicht!) oder einen Fehler im Browser, den Sie zum Testen Ihrer Website verwenden, hinweisen. In diesem Artikel werden wir diskutieren, wie Sie herausfinden, woran es liegt, und wie Sie einen Fehler melden können, wenn es sich um ein Problem im Browser handelt.

## Wessen Fehler ist es?

Bevor Sie einen Browser-Fehler melden, sollten Sie bestätigen, dass es sich tatsächlich um einen Fehler im Browser handelt. Das Problem könnte aus einem der vier Bereiche stammen: Ihrem Code, der Dokumentation, dem Browser oder der Spezifikation. Es ist wichtig, die anderen Möglichkeiten auszuschließen, bevor Sie einen Fehler beim Browser melden. Generell sind Spezifikationen die glaubwürdigste Quelle von allen; Browser und Dokumentationen folgen den Spezifikationen, können aber dennoch Fehler haben. Was Ihren Code betrifft... es ist immer gut, Tipp- und Logikfehler erneut zu überprüfen, bevor Sie annehmen, dass es sich um einen Browser-Fehler handelt.

### Einen Testfall erstellen

Der erste Schritt zur Identifizierung der Problemquelle ist die Erstellung eines minimalen Testfalls, der den Fehler reproduziert. Er sollte klein und eigenständig sein, vorzugsweise eine einzelne HTML-Datei mit eingebettetem CSS und JavaScript, ohne externe Abhängigkeiten oder nicht zusammenhängenden Code. Dies ist aus zwei Gründen nützlich:

- Es minimiert die Möglichkeit, dass das Problem durch Ihren eigenen Code oder eine externe Abhängigkeit verursacht wird.
- Sie müssen ohnehin einen bereitstellen, wenn Sie darüber mit jemandem diskutieren möchten—zum Beispiel beim Melden eines Fehlers.

Beispielsweise wäre der folgende ein guter Testfall für einen Fehler im Zusammenhang mit der {{cssxref(":autofill")}} Pseudo-Klasse. Beachten Sie, wie wir ihn auf das absolute Minimum reduziert haben, was bedeutet, dass wir auf Best Practices wie das Einfügen des Doctypes, der `<head>`- und `<body>`-Tags oder von Labels für Eingaben verzichten. Das ist in Ordnung, weil der relevante Code immer noch vorhanden ist.

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

Sie können Ihren HTML-Code entweder lokal speichern und [über einen Testserver bereitstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) oder einen Onlinedienst wie [JSFiddle](https://jsfiddle.net/) oder [CodePen](https://codepen.io/) verwenden, um eine Live-Demo zu erstellen.

Der einfachste Weg zu testen, ob das Problem ein Browser-Fehler ist, besteht darin, Ihren Testfall in [mehreren Browsern](/de/docs/Learn_web_development/Extensions/Testing/Introduction) zu öffnen. Wenn Sie in verschiedenen Browsern unterschiedliches Verhalten erleben, handelt es sich eher um einen Browser-Fehler.

> [!NOTE]
> Es gibt weitere Schritte, die Sie unternehmen können, um das Problem einzugrenzen, wie das Testen in einem privaten Fenster, das Deaktivieren von Erweiterungen oder das Leeren des Caches. Sie sollten dies ebenfalls versuchen, bevor Sie den Fehler melden.

### Überprüfung des Implementierungsstatus

Beginnen Sie damit, der Dokumentation zu vertrauen, und untersuchen Sie den oder die Browser, deren Verhalten nicht übereinstimmt. Nicht alle unerwarteten Verhaltensweisen sind Fehler. Manchmal können Browser eine Funktion oder ein Verhalten implementieren, das noch nicht in die Spezifikation aufgenommen wurde und daher weniger wahrscheinlich dokumentiert ist. Eine weitere Möglichkeit ist, dass eine Funktion in der Spezifikation beschrieben ist, aber noch in keinem Browser implementiert wurde, was auch bedeutet, dass sie möglicherweise nicht dokumentiert ist.

An diesem Punkt sollten Sie weitere Quellen überprüfen, um die Implementierungsgeschichte zu klären. Hier einige Orte, die Sie überprüfen sollten:

- **MDN's "Browser-Kompatibilität" Tabellen**: Im Abschnitt "Browser-Kompatibilität" unserer Referenzseiten (zum Beispiel in diesem [Abschnitt](/de/docs/Web/CSS/basic-shape/shape#browser_compatibility) auf der `shape()` CSS-Funktionsseite) finden Sie Informationen darüber, welche Browser eine Funktion unterstützen und in welchem Umfang. Dies kann darauf hinweisen, dass eine Funktion in Ihrem Zielbrowser nicht implementiert ist oder nur teilweise implementiert ist (d.h. sie hat bekannte Fehler oder Einschränkungen).
- **Spezifikations-Repositories**: Standardisierungsgremien wie [WHATWG](https://github.com/whatwg) (für DOM, HTML, Fetch und mehr), [CSSWG](https://github.com/w3c/csswg-drafts) (für CSS) und [TC39](https://github.com/tc39) (für JavaScript) arbeiten öffentlich auf GitHub. Sie können überprüfen, ob eine Spezifikation kürzlich geändert wurde oder ob es ein offenes Problem zu der von Ihnen getesteten Funktion gibt.
- **Community-Foren**: Die [MDN-Community](/de/docs/MDN/Community/Communication_channels) ist ein guter Ausgangspunkt, ebenso wie andere Webentwicklungsforen. Dies sind gute Orte, um Fragen zu stellen, ob Browser etwas noch nicht implementiert haben oder ob es einen bekannten Fehler gibt.
- **Fehlerverfolgungssystem für den Browser, den Sie testen**: Wenn Sie feststellen, dass ein Problem im Zusammenhang mit Ihrem Problem bereits gemeldet wurde, bestätigt dies, dass der Fehler real ist, und Sie müssen nichts weiter tun. Tatsächlich behandeln wir als Nächstes Fehlerverfolgungssysteme.

Natürlich, selbst wenn alle Browser sich gleich verhalten, könnte dennoch ein Fehler in allen vorhanden sein, oder vielleicht implementiert nur ein einzelner Browser das beabsichtigte Verhalten. Dokumentation kann veraltet oder falsch sein. Um sicherzugehen, sollten Sie die Spezifikation als Quelle der Wahrheit betrachten (außer in seltenen Fällen, in denen Browser Dinge vor der Spezifikation implementieren). Auf jeder MDN-Referenzseite finden Sie Links zu den relevanten Spezifikationen im Abschnitt "Spezifikationen" (siehe dieses [Beispiel](/de/docs/Web/CSS/basic-shape/shape#specifications)). Lesen Sie die Spezifikation, um zu prüfen, wie das Verhalten sein sollte. Manchmal sind Spezifikationen schwer zu verstehen, da sie für Browser-Ingenieure gedacht sind, aber geben Sie Ihr Bestes.

Wenn sich herausstellt, dass alle Browser und die Spezifikation konsistent sind, aber MDN falsch liegt, ziehen Sie in Betracht, [beizutragen](/de/docs/MDN/Community/Getting_started)!

## Fehlerverfolgungssysteme für Browser

Jeder Browser hat sein eigenes Fehlerverfolgungssystem, wo Sie nach bestehenden Fehlern suchen und neue erstellen können. Die Benutzeroberfläche und der Prozess können sich anfangs etwas ungewohnt anfühlen, aber es gibt normalerweise Anleitungen. Die folgende Tabelle listet die Fehlerverfolgungssysteme der wichtigsten Browser auf:

| Browser         | Fehlerverfolgungssystem                                |
| --------------- | ------------------------------------------------------ |
| Apple Safari    | [WebKit Bugzilla](https://webkit.org/reporting-bugs/)  |
| Google Chrome   | [Chromium Issues](https://issues.chromium.org/issues)  |
| Mozilla Firefox | [Mozilla Bugzilla](https://bugzilla.mozilla.org/)      |
| Opera           | [Opera Bug Wizard](https://bugs.opera.com/wizard/)     |

Suchen Sie nach bestehenden Fehlerberichten, bevor Sie einen neuen einreichen. Wenn Sie einen bestehenden Fehlerbericht finden, der zu Ihrem Problem passt, können Sie einen Kommentar mit Ihren Erkenntnissen hinzufügen (zum Beispiel, wenn Sie eine Umgehungslösung gefunden haben oder wenn Sie mehr Informationen über den Fehler haben). Fügen Sie jedoch keine Kommentare wie "Ich habe diesen Fehler auch gefunden" hinzu, da sie keinen wirklichen Mehrwert bieten. Wenn Sie keinen bestehenden Fehler finden, können Sie einen neuen einreichen—jemand wird Ihnen mitteilen, ob es sich um ein Duplikat handelt.

Wenn Sie einen neuen Fehler melden, stellen Sie sicher, dass Sie Ihren minimalen Testfall und alle anderen Informationen, die das Berichtsformular anfordert, einschließen—wie Browser-Version, erwartetes vs. tatsächliches Ergebnis und Screenshots. Einige Fehlerverfolgungssysteme könnten Sie auch bitten, eine Komponente oder Kategorie für den Fehler auszuwählen, wie z.B. Rendering oder Networking. Die Browser-Entwickler verwenden diese Labels zur Organisation der Arbeit. Wenn Sie unsicher sind, was Sie auswählen sollten, raten Sie—jemand wird es bei Bedarf umassignieren.

## Fehler für Nicht-Browser-Software melden

Wenn der Fehler mit einer Nicht-Browser-Software zusammenhängt, die möglicherweise mit dem Browser integriert ist, müssen Sie den Fehler beim entsprechenden Software-Hersteller melden. Die folgende Tabelle listet einige Hilfstechnologien und wo Sie Fehler dafür melden können:

| Software                                                                              | Wo man Fehler melden kann                                                             |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Freedom Scientific JAWS](https://www.freedomscientific.com/products/software/jaws/)  | [JAWS tech support form](https://support.freedomscientific.com/Forms/TechSupport)      |
| [Non Visual Desktop Access (NVDA)](https://www.nvaccess.org/)                         | [NVDA-Fehler melden](https://github.com/nvaccess/nvda)                                 |
