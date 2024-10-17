---
title: API-Ereignis-Unterseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diese gesamte erläuternde Anmerkung, bevor Sie veröffentlichen._
>
> ---
>
> **Meta-Daten der Seite:**
>
> Die Meta-Daten, die am Anfang der Seite stehen, werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Ereignis aktualisiert werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent event"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : Der Titel, der am oberen Rand der Seite angezeigt wird.
>     Formatieren Sie ihn als "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Zum Beispiel hat das [animationcancel](/de/docs/Web/API/Element/animationcancel_event) Ereignis der [Window](/de/docs/Web/API/Window) Schnittstelle den _title_ `Window: animationcancel event`.
> - **slug**
>   - : Der Endteil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieses Attribut sollte nicht manuell gesetzt werden: es wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` mit dem Abfragestring für das Ereignis im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte Kompatibilität und Spezifikation zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dieser Eintrag muss spezifikationsbezogene Informationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Anzahl von Makro-Aufrufen erscheint am Anfang des Inhaltsbereichs (direkt unterhalb der Meta-Daten der Seite).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Das erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einer Voreinstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Das erzeugt ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [vermeidbar](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Das erzeugt ein **Nicht-Standard** Banner, das darauf hinweist, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der unten stehenden Ratschläge aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Das erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn es nicht der Fall ist, können Sie den Makro-Aufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — Das erzeugt eine **Verfügbar in Arbeitern** Notiz, die darauf hinweist, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makro-Aufruf entfernen.
>   Wenn es auch im Arbeiterkontext verfügbar ist oder dort ausschließlich verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, um die Verfügbarkeit anzugeben (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) für alle verfügbaren Werte), und Sie müssen möglicherweise einen Eintrag dafür auf der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Das erzeugt die linksseitige Referenz-Sidebar, die schnelle Referenzlinks zu verwandten Themen auf der aktuellen Seite zeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API hinweist.
>   Um die korrekte Sidebar für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu, wie man das macht.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Statusheader-Makros manuell ein. Verweisen Sie auf den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden direkt nach diesem Notizblock angezeigt.
>
> ---
>
> **Link zum übergeordneten Objekt**
>
> Fügen Sie einen Link zu dieser neuen Seite aus dem _Events_ Abschnitt des übergeordneten Objekts hinzu.
> Zum Beispiel wird [Element: wheel event](/de/docs/Web/API/Element/wheel_event) von [den `Element` Ereignisse](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das übergeordnete Objekt keinen _Events_ Abschnitt hat, dann fügen Sie einen hinzu.
> Wenn es sich um eine neue "Klasse" von Ereignissen handelt, dann sollten Sie einen Link zu diesem Abschnitt des Elternobjekts aus dem [Event-Referenz](/de/docs/Web/Events) hinzufügen.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz — beginnen Sie damit, das Ereignis zu benennen, sagen Sie, zu welchem Interface es gehört und was es macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten den größten Teil davon aus der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Verwenden Sie den Namen des Ereignisses in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, erwähnen Sie es zusammen mit seiner Vererbung. Wenn nicht, geben Sie an, dass es ein allgemeines Ereignis ist:

_Ein allgemeines [`Event`](/de/docs/Web/API/Event)._

Oder, zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

Wenn das Ereignis nicht nur ein allgemeines [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften auf, die das Ereignis hat.

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus dem übergeordneten Interface, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Wenn Sie zusätzlichen Text bereitstellen möchten (zu lang für die Zusammenfassung), fügen Sie einen Beschreibungsabschnitt hinzu.
Er kann die Überschriften

### Auslöser

und

### Anwendungsbeispiele

enthalten, die weitere Informationen liefern können.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit einem Namen für das Beispiel haben. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus, und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie möglicherweise auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; geben Sie die Links direkt unter der H2-Überschrift "Beispiele" an. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den [Abschnitt Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für den Schreibstil_.

- link1
- link2
- external_link (Jahr)
