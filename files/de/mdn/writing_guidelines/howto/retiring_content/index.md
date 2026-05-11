---
title: Anleitung zum Zurückziehen eines Inhaltsbereichs
short-title: Zurückziehen von Inhalten
slug: MDN/Writing_guidelines/Howto/Retiring_content
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

Dieser Artikel beschreibt den Prozess des Zurückziehens ganzer Bereiche von MDN Web Docs-Inhalten, bekannt als _Zurückziehung_. Die Zurückziehung unterscheidet sich vom [Löschen oder Verschieben einzelner Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting); sie gilt, wenn ein ganzer Abschnitt nicht mehr aktiv gepflegt wird, nicht mehr relevant ist oder nicht mit den Zielen von MDN übereinstimmt und in geplanter und transparenter Weise zurückgezogen werden muss. Zurückgezogene Inhalte werden nicht dauerhaft gelöscht — sie werden stets im [MDN Museum-Repository](https://github.com/mdn/museum) archiviert.

Das Zurückziehen ist ein sehr seltenes Ereignis, und der Prozess wird je nach den Umständen unterschiedlich sein. Dieser Leitfaden gibt einen Überblick darüber, wann und wie ein Abschnitt zurückgezogen werden sollte und welche Schritte dafür zu befolgen sind. Eine Liste der bereits zurückgezogenen Abschnitte finden Sie unter [Zurückgezogene Inhalte](/de/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content).

In diesem Leitfaden bedeutet ein _Abschnitt_ ein eigenständiger Bereich der MDN Web Docs — typischerweise ein oberes Verzeichnis (zum Beispiel `/Web/SECTION_NAME`) oder ein zusammenhängender Teilbaum (zum Beispiel `/Learn_web_development/PATH/SECTION_NAME`), wie ein vollständiges Technologie-Referenzverzeichnis oder ein vollständiger Lernpfad. Dieser Prozess gilt _nicht_ für:

- Das Markieren eines einzelnen Webplattform-Features als veraltet innerhalb eines ansonsten aktiven Bereichs, was dem standardmäßigen [Veraltungsprozess](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) folgt.
- Das Entfernen einer einzelnen Seite oder eines Leitfadens, was im [Leitfaden zum Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages) behandelt wird.

Wenn Sie unsicher sind, ob eine Entfernung als Zurückziehung gilt, diskutieren Sie dies in einer [GitHub-Diskussion](https://github.com/orgs/mdn/discussions), bevor Sie den Prozess starten.

## Wann das Zurückziehen von Inhalten in Erwägung ziehen

Sie möchten das Zurückziehen eines Abschnitts von MDN Web Docs-Inhalten vorschlagen, wenn eines der folgenden Kriterien zutrifft:

- Die Technologie ist veraltet oder nicht mehr relevant für die Webplattform.
- Der Abschnitt dupliziert Informationen, die anderswo besser gepflegt werden (wie eine offizielle Dokumentationsseite für ein Framework).
- Der Abschnitt stimmt nicht mit der [Content-Strategie von MDN](/de/docs/MDN/Writing_guidelines/What_we_write#topics_that_belong_on_mdn_web_docs) überein.
- Die Wartungskosten übersteigen den Nutzen für die Benutzer, wie durch Nutzungsdaten und Benutzerfeedback angezeigt.

Das Zurückziehen sollte immer ein bewusster, sichtbarer Prozess sein. Großangelegte Entfernungen sollten niemals ohne Diskussion oder Ankündigung stattfinden. Die endgültige Entscheidung, einen Abschnitt zurückzuziehen, liegt beim MDN-Team.

> [!NOTE]
> Wenn Sie einzelne Seiten statt eines gesamten Abschnitts entfernen möchten, konsultieren Sie unseren [Leitfaden zum Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages). Für Hinweise zur Kennzeichnung einzelner Funktionen als veraltet, siehe [Wie man eine Technologie kennzeichnet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

## Der Zurückziehungsprozess

Das Zurückziehen eines Abschnitts von MDN Web Docs-Inhalten umfasst zwei Phasen: eine Vereinbarung treffen und dann den Inhalt entfernen.

### Phase 1: Entscheidungsprozess

Das Zurückziehen muss vom MDN-Team und seinen Partnern vereinbart werden. Die Diskussion kann in unseren [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels), über eine [GitHub-Diskussion](https://github.com/orgs/mdn/discussions) und/oder in unseren redaktionellen Anrufen (alle zwei Wochen) stattfinden.

Wenn ein Abschnitt ernsthaft zur Zurückziehung in Betracht gezogen wird, muss eine GitHub-Diskussion eröffnet werden, um die Entscheidung und den Prozess festzuhalten. Die Diskussion sollte klarstellen:

- Die Gründe für die Entfernung.
- Die Auswirkungen der Entfernung.
- Relevante Interessengruppen sind sich dessen bewusst und wurden konsultiert.
- Alternative Ansätze wurden in Betracht gezogen.

In einigen Fällen kann die Entscheidung auch das **Einholen von Feedback von MDN-Nutzern** beinhalten. Dies kann beinhalten:

- Eine Benutzerbefragung durchführen.
- Um Feedback über GitHub oder andere [MDN-Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) bitten.

Ziel ist es zu bestätigen, dass der Abschnitt den Nutzerbedürfnissen nicht mehr entspricht und dass es keinen klaren Weg zu einer nachhaltigen Wartung gibt.

Wenn eine Vereinbarung zum Zurückziehen eines Abschnitts getroffen wird, sollte ein Zeitplan festgelegt werden — typischerweise zwischen **3 und 6 Monaten**. Die Gründe und der Zeitplan sollten in der GitHub-Diskussion dokumentiert werden. Es sollte in der Diskussion klar sein, dass die Inhalte archiviert, nicht dauerhaft gelöscht werden.

Wenn eine Entscheidung getroffen wird, _nicht_ zurückzuziehen, sollte dies zusammen mit den Gründen über den ursprünglichen Kommunikationskanal mitgeteilt werden.

### Phase 2: Entfernen von Inhalten

Sobald eine Einigung erzielt wurde, befolgen Sie diese Schritte, um die Inhalte zu entfernen.

#### Fügen Sie ein Hinweisbanner zur Zurückziehung hinzu

Fügen Sie oben auf _jeder Artikel_ im Abschnitt, der zurückgezogen wird, ein [Hinweisbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) hinzu. Das Banner sollte klar benennen:

- Dass der Abschnitt von der Website entfernt wird.
- Den erwarteten Zeitraum und das Datum der Entfernung.
- Dass die Inhalte archiviert werden.
- Einen Link zur GitHub-Diskussion für weitere Details.

Verwenden Sie die folgende Vorlage:

```md
> [!NOTE]
> This section of MDN is no longer being maintained and will be removed from the website in 6 months (by MONTH YEAR). The content will be archived in the [MDN Museum](https://github.com/mdn/museum). See [this discussion](LINK) for further information.
```

Dieser Hinweis sorgt für Transparenz und gibt den Nutzern Zeit, sich daran anzupassen.

#### Archivieren und Entfernen der Inhalte

Nachdem der vereinbarte Zeitraum für die Zurückziehung abgelaufen ist, können die Inhalte wie folgt aus den MDN Web Docs entfernt werden:

1. **Archivieren Sie die Inhalte.** Kopieren Sie den Abschnitt in das [MDN Museum-Repository](https://github.com/mdn/museum) zu Archivierungszwecken. Behalten Sie die Inhalte in einem Verzeichnis, das dem ursprünglichen URL-Pfad entspricht. Zum Beispiel würden Inhalte unter `https://developer.mozilla.org/de/docs/Games` in ein `/docs/games/` Verzeichnis im Museum-Repository verschoben werden. Dies bewahrt die Inhaltshistorie von MDN, während veraltetes Material von der aktiven Website ferngehalten wird.

2. **Entfernen Sie die Inhalte und fügen Sie Weiterleitungen hinzu.** Verwenden Sie den [`delete` Befehl](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages), um die Seiten zu entfernen und Weiterleitungen einzurichten. Weiterleitungen sollten Nutzer auf die relevanteste alternative Inhalte leiten, falls verfügbar. Ist keine geeignete Alternative vorhanden, leiten Sie zur entsprechenden Eintragung auf der [Liste der zurückgezogenen Inhalte](/de/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content) (unter Verwendung des abschnittsspezifischen Ankers, z.B. `#section_name`) weiter, damit Leser den Kontext der Entfernung verstehen und dem Link zur archivierten Version folgen können. Vermeiden Sie Weiterleitungen zur Startseite von MDN Web Docs, da dies Leser ohne Erklärung zurücklässt.

3. **Bereinigen Sie Referenzen.** Entfernen oder aktualisieren Sie jegliche Verweise auf den zurückgezogenen Abschnitt in ganz MDN, einschließlich Seitenleisten-Definitionen, Startseiten und Querverbindungen von anderen Artikeln. Das Hinzufügen von Weiterleitungen (siehe Schritt 2) vermeidet fehlerhafte Links, aber es ist am besten, den referenzierenden Inhalt direkt zu aktualisieren.

4. **Reichen Sie ein Issue für UI-Updates ein.** Einige Bereiche der Benutzeroberfläche der Website — wie Navigationsmenüs und Abschnitte der Startseite — sind nicht Teil des `content` Repositories und werden stattdessen vom Plattformteam verwaltet. Reichen Sie ein Issue im [mdn/fred](https://github.com/mdn/fred/) Repository ein, um zu prüfen, ob UI-Änderungen erforderlich sind, um Referenzen auf die zurückgezogenen Inhalte zu entfernen. Falls ja, koordinieren Sie die Entfernung der Inhalte und das UI-Update, sodass sie gleichzeitig bereitgestellt werden.

> [!WARNING]
> Löschen Sie Inhalte nicht dauerhaft, ohne sie zuerst zu archivieren.

## Siehe auch

- [Wie man Seiten erstellt, bearbeitet, verschiebt oder löscht](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)
- [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write)
- [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)
- [Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
