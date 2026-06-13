---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in API-Referenzen, um wichtige Faktoren hervorzuheben, die die Nutzung des beschriebenen Inhalts beeinflussen. Zum Beispiel werden Banner verwendet, um darauf hinzuweisen, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext verwendet werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert. Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Banner-Makros hinzugefügt werden

Banner werden mithilfe von Makros hinzugefügt, die normalerweise unterhalb der Seitendaten und neben dem Seitenrand-Makro eingefügt werden. Zum Beispiel wurde im folgenden Block das Makro `\{{SecureContext_Header}}` verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, das Makro `\{{AvailableInWorkers}}` wurde verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur im [Fensterkontext](/de/docs/Web/API/Window) und im [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## Banner, die manuell hinzugefügt werden müssen

Die folgenden Makros müssen Sie manuell hinzufügen:

- `\{{SecureContext_Header}}` — dieses erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — dieses erzeugt eine **Verfügbar in Workern**-Notiz, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch dem Inhalt hinzugefügt, um die in den [browser compat data](https://github.com/mdn/browser-compat-data) gespeicherten Status zu entsprechen:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht-Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im repository zur browser-compat-data](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros im Inhalt manuell aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner enthalten, haben auch die entsprechenden `experimentell`, `veraltet` und `nicht-standard` Statuswerte in den Seitendaten.
> Die Metadaten werden automatisch gleichzeitig mit den Überschriften aktualisiert.
> Die Banner-Makros sind nicht von diesen Statusdaten abhängig (könnten aber eines Tages daraus generiert werden).

## Experimentell: "Standards positions" Banner

Gelegentlich gibt es unter Browseranbietern Uneinigkeit darüber, wie sich eine Funktion entwickelt, und einige können sich in ihrer aktuellen Form dagegen aussprechen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community dazu zu ermutigen, mit diesen zu experimentieren, Feedback zu geben und den Browserherstellern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Funktionen klarzustellen. Während eine langfristige Lösung zur Darstellung dieser Informationen noch nicht final ist, tun wir Folgendes für bestimmte hochkarätige Technologien, um Verwirrungen zu vermeiden:

- Dieses Banner zur Zielseite für diese Funktion hinzufügen (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die sich gegen die Funktion aussprechen.
  - Verwenden Sie `vendor` oder `vendors` je nach Bedarf.

- Einen "Standards positions" Abschnitt zur gleichen Seite wie das obige Banner hinzufügen, als Unterabschnitt des standardmäßigen "Specifications"-Abschnitts.

> [!NOTE]
> Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) für ein Beispiel des "Standards positions"-Abschnitts und dessen Inhalt an, sowie das Banner auf der Zielseite.
