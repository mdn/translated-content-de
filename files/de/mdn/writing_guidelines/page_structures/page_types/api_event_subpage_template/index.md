---
title: API-Ereignis-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Hinweis:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Seiteneigenschaften (Front Matter):**
>
> Der Front Matter am Anfang der Seite wird verwendet, um "Metadaten der Seite" zu definieren.
> Die Werte sollten entsprechend für das spezifische Ereignis aktualisiert werden.
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
>   - : Der Titel wird oben auf der Seite angezeigt.
>     Formatieren Sie ihn als "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Zum Beispiel hat das [animationcancel](/de/docs/Web/API/Element/animationcancel_event)-Ereignis der [Window](/de/docs/Web/API/Window)-Schnittstelle einen _title_ von `Window: animationcancel event`.
> - **slug**
>   - : Der letzte Teil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dieser wird wie folgt formatiert: `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [Anleitung zur Aktualisierung von Funktionsstatus](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` durch die Abfragezeichenkette für das Ereignis im [Browser-Compatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte **Kompatibilität** und **Spezifikationen** zu füllen (Ersetzen von `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis im [Browser-Compatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen. Dieser Eintrag muss auch Informationen zu den Spezifikationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsabschnitt (direkt unter dem Front Matter der Seite).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einer Einstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [abzuraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros aktualisieren oder entfernen, entsprechend den Ratschlägen unten:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag auf der Seite [Auf sichere Kontexte beschränkte Funktionen](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt einen **In Workers verfügbar**-Hinweis, der angibt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Falls sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Falls sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise ein Parameter übergeben (weitere Informationen finden Sie im [Quellcode der \{{AvailableInWorkers}} Makros](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)), und Sie sollten möglicherweise auch einen Eintrag auf der Seite [Web-APIs im Worker verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste auf der linken Seite, die schnelle Referenzlinks zugehörig zur aktuellen Seite anzeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten der API verweist.
>   Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie ein `GroupData`-Eintrag zu unserem GitHub-Repository hinzufügen und den Namen des Eintrags im Makro-Aufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden für API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für weitere Informationen.
> - Denken Sie daran, das Makro `\{{MDNSidebar}}` zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros sollten nicht manuell hinzugefügt werden. Weitere Informationen finden Sie im Abschnitt ["Anleitung zur Aktualisierung von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> Beispiele der Banner **Sicherer Kontext**, **In Workers verfügbar**, **Experimentell**, **Veraltet** und **Nicht standardisiert** sind direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Link zum übergeordneten Objekt**
>
> Fügen Sie einen Link zu dieser neuen Seite aus dem _Events_-Abschnitt des übergeordneten Objekts hinzu.
> Zum Beispiel ist [Element: wheel event](/de/docs/Web/API/Element/wheel_event) aus [`Element` Events](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das übergeordnete Objekt keinen _Events_-Abschnitt hat, dann fügen Sie einen hinzu.
> Wenn dies eine neue "Klasse" von Ereignis ist, sollten Sie auch einen Link aus diesem Abschnitt des Elternteils in der [Ereignisreferenz](/de/docs/Web/Events) hinzufügen.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie die Seite mit einem Einführungsabschnitt — beginnen Sie mit der Benennung des Ereignisses, sagen Sie, zu welcher Schnittstelle es gehört, und geben Sie an, was es macht.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.
Sie können den Großteil davon von der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, erwähnen Sie es zusammen mit seiner Vererbung. Wenn nicht, geben Sie an, dass es ein generisches Ereignis ist:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereignis-Eigenschaften

Falls das Ereignis nicht nur ein generisches [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften des Ereignisses auf.

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Wenn Sie zusätzlichen Text bereitstellen möchten (zu lang für die Zusammenfassung), fügen Sie einen Abschnitt Beschreibung hinzu.
Dieser kann die Überschriften

### Auslöser

und

### Anwendungsfälle

enthalten, die weitere Informationen bieten können.

## Beispiele

Beachte, dass wir die Mehrzahl "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Beispielcode](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
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
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für Schreibstil_.

- link1
- link2
- external_link (year)
