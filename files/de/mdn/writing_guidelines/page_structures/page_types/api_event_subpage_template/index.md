---
title: Vorlagenunterseite für API-Ereignisse
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seitenanfang:**
>
> Der Seitenanfang oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Ereignis aktualisiert werden.
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
>   - : Der Titelkopf wird oben auf der Seite angezeigt.
>     Formatieren Sie ihn als "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Zum Beispiel hat das [animationcancel](/de/docs/Web/API/Element/animationcancel_event) Ereignis der [Window](/de/docs/Web/API/Window) Schnittstelle einen _title_ von `Window: animationcancel event`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` mit der Abfragezeichenfolge für das Ereignis im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für das Ereignis in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dieser Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie Sie dies tun](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unterhalb der Seitenanfangsdaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, diese hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Präfix verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardmäßig**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten das folgende Makro gemäß dem folgenden Hinweis aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies erzeugt einen **Verfügbar in Workern**-Hinweis, der darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch im Worker-Kontext oder nur dort verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, um seine Verfügbarkeit anzugeben (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und Sie müssen möglicherweise auch einen Eintrag auf der Seite [Webapis verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt die linksseitige Referenz-Sidebar mit schnellen Referenzlinks zur aktuellen Seite.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten in der API verweist.
>   Um die richtige Sidebar für Ihre API zu erstellen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Eintragsnamen im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie dies getan wird.
>
> Status-Header-Makros sollten nicht manuell bereitgestellt werden. Lesen Sie den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zu den Seiten hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standardmäßig**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Link auf übergeordnetes Objekt**
>
> Fügen Sie einen Link zu dieser neuen Seite aus dem Abschnitt _Events_ des übergeordneten Objekts hinzu.
> Zum Beispiel ist [Element: wheel event](/de/docs/Web/API/Element/wheel_event) aus [`Element` Events](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das übergeordnete Objekt keinen _Events_-Abschnitt hat, dann fügen Sie einen hinzu.
> Wenn es sich um eine neue "Klasse" von Ereignis handelt, sollten Sie einen Link zu diesem Abschnitt des übergeordneten Elements aus der [Ereignisreferenz](/de/docs/Web/Events) hinzufügen.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie damit, das Ereignis zu benennen, welcher Schnittstelle es angehört und was es tut.
Dies sollte idealerweise ein bis zwei kurze Sätze umfassen.
Sie können das meiste davon von der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite übernehmen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })

onNameOfTheEvent = (event) => { }
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, erwähnen Sie ihn zusammen mit seiner Vererbung. Wenn nicht, geben Sie an, dass es sich um ein generisches Ereignis handelt:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder, zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

Wenn das Ereignis nicht nur ein generisches [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften auf, die das Ereignis hat.

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Wenn Sie zusätzlichen Text bereitstellen möchten (zu lang für die Zusammenfassung), fügen Sie einen Abschnitt "Beschreibung" hinzu.
Dieser kann die Überschriften

### Auslöser

und

### Anwendungsfälle

enthalten, die weitere Informationen bieten können.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Code-Beispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung der Fetch-API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückstriche und Anführungszeichen in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückstriche und Anführungszeichen in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinienleitfaden_.

- link1
- link2
- external_link (year)
