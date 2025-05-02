---
title: API-Ereignis-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

> **Note:** _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seiteneinleitung:**
>
> Die Einleitung am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für das jeweilige Ereignis entsprechend aktualisiert werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent event"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie es als "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Zum Beispiel hat das [animationcancel](/de/docs/Web/API/Element/animationcancel_event)-Ereignis des [Window](/de/docs/Web/API/Window) Interfaces einen _title_ von `Window: animationcancel event`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Es wird formatiert als `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : Der `page-type` für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` mit der Abfragezeichenfolge für das Ereignis im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Abschnitte Kompatibilität und Spezifikation auszufüllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dieser Eintrag muss Spezifikationsinformationen enthalten.
>     Sehen Sie unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter der Seiteneinleitung).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **This is an experimental technology**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es sich um eine experimentelle Technologie handelt und sie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Deprecated**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Non-standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend dem unten stehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn es nicht so ist, können Sie den Makroaufruf entfernen.
>   Wenn es das ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt eine **Available In Workers**-Notiz, die darauf hinweist, dass die Technologie im [worker context](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch im Worker-Kontext oder ausschließlich verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund seiner Verfügbarkeit hinzufügen (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web APIs available in workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die linke Referenz-Seitenleiste, die Schnellverknüpfungen zeigt, die mit der aktuellen Seite verbunden sind.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Sehen Sie unseren [Leitfaden für API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu.
>
> Geben Sie keine Status-Header-Makros manuell ein. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Link zum übergeordneten Objekt**
>
> Fügen Sie einen Link zu dieser neuen Seite aus dem Abschnitt _Events_ des übergeordneten Objekts hinzu.
> Zum Beispiel ist [Element: wheel event](/de/docs/Web/API/Element/wheel_event) mit [`Element` Events](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das übergeordnete Objekt keinen _Events_-Abschnitt hat, fügen Sie einen hinzu.
> Wenn dies eine neue "Klasse" von Ereignissen ist, sollten Sie einen Link zu diesem Abschnitt des übergeordneten Objekts aus der [Ereignisreferenz](/de/docs/Web/Events) hinzufügen.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung des Ereignisses, sagen Sie, zu welchem Interface es gehört und was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten den größten Teil davon von der Eigenschaftszusammenfassung auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })

onNameOfTheEvent = (event) => { }
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, geben Sie ihn zusammen mit seiner Vererbung an. Wenn nicht, geben Sie an, dass es sich um ein generisches Ereignis handelt:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder, zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Vererbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

Wenn das Ereignis nicht nur ein generisches [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften auf, die das Ereignis hat.

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Wenn Sie zusätzlichen Text bereitstellen möchten (zu lang für die Zusammenfassung), fügen Sie einen Abschnitt Beschreibung hinzu.
Er kann die Überschriften enthalten

### Auslöser

und

### Anwendungsfälle

die weitere Informationen bieten können.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen können, für mehr Informationen.

> [!NOTE]
> Manchmal wollen Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Links zu den Beispielen auf anderen Seiten hinzufügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil Leitfaden_.

- link1
- link2
- external_link (year)
