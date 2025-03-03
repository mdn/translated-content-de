---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

Banner und Hinweise werden auf einigen Seiten, insbesondere in API-Referenzen, angezeigt, um wichtige Faktoren hervorzuheben, die die Nutzung des beschriebenen Inhalts beeinflussen werden. Zum Beispiel werden Banner genutzt, um hervorzuheben, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht im Produktivcode verwendet werden sollte, oder nur in einem sicheren Kontext benutzt werden kann.

Banner werden mit Makros im Seiteninhalt dargestellt. Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo werden Banner-Makros hinzugefügt

Banner werden mit Makros hinzugefügt, die normalerweise unterhalb der Metadaten der Seite, neben dem Seitenleisten-Makro eingefügt werden. Zum Beispiel wurde im folgenden Block das `\{{SecureContext_Header}}` Makro verwendet, um anzugeben, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Das `\{{AvailableInWorkers}}` Makro wurde verwendet, um anzugeben, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle nur im [Window-Kontext](/de/docs/Web/API/Window) und [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzugeben, dass die Schnittstelle experimentell ist.

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

Sie müssen die folgenden Makros manuell hinzufügen:

- `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Workern**-Notiz, die angibt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um die in der [browser compat data](https://github.com/mdn/browser-compat-data) Repository gespeicherten Status anzuzeigen:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das angibt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht-Standard**-Banner, das angibt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Feature-Status im browser-compat-data Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros im Inhalt manuell aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt oder entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner haben, werden auch die entsprechenden Statuswerte `experimentell`, `veraltet` und `nicht-standardisiert` in den Metadaten der Seite haben. Die Metadaten werden zur gleichen Zeit wie die Header automatisch aktualisiert. Die Banner-Makros sind nicht von diesen Status-Metadaten abhängig (könnten aber eines Tages daraus generiert werden).

## Experimentell: "Standards positions" Banner

Gelegentlich sind sich Browseranbieter uneinig darüber, wie sich ein Feature entwickelt, und einige können es in seiner aktuellen Form ablehnen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und den Browseranbietern zu helfen, einen Konsens zu finden.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Features zu klären. Während eine langfristige Lösung zur Darstellung dieser Informationen noch nicht endgültig ist, machen wir folgendes für spezifische, hochkarätige Technologien, um Verwirrung zu vermeiden:

- Hinzufügen dieses Banners zur Hauptseite dieses Features (nicht für jede Unterseite des Features):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die gegen das Feature sind.
  - Verwenden Sie `vendor` oder `vendors`, wie passend.

- Hinzufügen eines "Standards positions"-Abschnitts auf derselben Seite wie das oben genannte Banner, als Unterabschnitt des standardmäßigen "Spezifikationen"-Abschnitts.

> [!NOTE]
> Siehe [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards positions"-Abschnitts und was er enthalten sollte, sowie das Hauptseiten-Banner.
