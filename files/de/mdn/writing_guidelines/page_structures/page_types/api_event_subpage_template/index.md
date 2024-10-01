---
title: API-Ereignisse Unterseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Page front matter:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird.
>     Formatieren Sie es als "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Zum Beispiel hat das [animationcancel](/de/docs/Web/API/Element/animationcancel_event) Ereignis der [Window](/de/docs/Web/API/Window) Schnittstelle einen _title_ von `Window: animationcancel event`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/API/NameOfTheParentInterface/NameOfTheEvent_event` formatiert.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Optionen enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` mit der Abfragezeichenfolge für das Ereignis im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte „Kompatibilität“ und „Spezifikation“ zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen, und dieser Eintrag muss Spezifikationsinformationen enthalten.
>     Sehen Sie unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> Im oberen Bereich des Inhaltsabschnitts (unmittelbar unter der Seitenfrontmatter) erscheinen einige Makro-Aufrufe.
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard** Banner, das darauf hinweist, dass das Merkmal nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem Rat unten aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makro-Aufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Eingeschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die linke Referenz-Sidebar mit schnellen Referenzlinks bezogen auf die aktuelle Seite.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makro-Aufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden zur Information, wie dies zu tun ist. Entfernen Sie das `\{{MDNSidebar}}` Makro, wenn Sie diese Seite kopieren.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Anmerkungsblock gezeigt.
>
> ---
>
> **Elternobjekt-Link**
>
> Fügen Sie dieser neuen Seite einen Link aus dem _Ereignisse_ Abschnitt des Elternobjekts hinzu.
> Zum Beispiel ist [Element: wheel event](/de/docs/Web/API/Element/wheel_event) von [`Element` Events](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das Elternobjekt keinen _Ereignisse_ Abschnitt hat, fügen Sie einen hinzu.
> Wenn dies eine neue "Klasse" von Ereignissen ist, sollten Sie einen Link zu diesem Abschnitt des Elterns von der [Ereignisreferenz](/de/docs/Web/Events) hinzufügen.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit dem Namen des Ereignisses, sagen Sie, zu welcher Schnittstelle es gehört, und was es tut.
Ideal wäre es, ein oder zwei kurze Sätze zu schreiben.
Sie könnten den größten Teil davon aus der Zusammenfassung des Eigenschaften auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## Ereignistyp

Falls das Ereignis einen speziellen Typ hat, erwähnen Sie dies zusammen mit seiner Vererbung. Wenn nicht, geben Sie an, dass es sich um ein generisches Ereignis handelt:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder, zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

Wenn das Ereignis nicht nur ein generisches [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften des Ereignisses auf.

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), zur Verfügung._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Falls Sie zusätzlichen Text (zu lang für die Zusammenfassung) hinzufügen möchten, fügen Sie einen Beschreibungsabschnitt hinzu.
Er kann die Überschriften enthalten

### Auslösen

und

### Anwendungsfälle

welche weitere Informationen bereitstellen können.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein und sagen, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung der Fetch-API
>
> Beispiel der Fetch
>
> ### Mehr Beispiele
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
