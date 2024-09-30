---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{MDNSidebar}}

Banner und Hinweise werden in einigen Seiten angezeigt, insbesondere in API-Referenzen, um wichtige Faktoren hervorzuheben, die die Nutzung des beschriebenen Inhalts beeinflussen. Beispielsweise werden Banner verwendet, um zu kennzeichnen, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext genutzt werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert. Einige Bannermakros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Bannermakros hinzugefügt werden

Banner werden mithilfe von Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten eingefügt werden, zusammen mit dem Seitenseitenleisten-Makro. Zum Beispiel wurde im folgenden Block das `\{{SecureContext_Header}}`-Makro verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers}}
```

## Banner, die manuell hinzugefügt werden müssen

Sie müssen die folgenden Makros manuell hinzufügen:

- `\{{SecureContext_Header}}` — Dieses generiert ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — Dieses generiert einen Hinweis, der anzeigt, dass die Technologie in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch in den Inhalt eingefügt, um den Status im browser-compat-data-Repository widerzuspiegeln:

- `\{{SeeCompatTable}}` — generiert ein **Das ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — generiert ein **Nicht-Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Feature-Status im browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Werte zu ändern.

> [!NOTE]
> Auch wenn Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die Banner `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` enthalten, werden auch die entsprechenden Statuswerte `experimentell`, `veraltet` und `nicht-standard` in den Seitenmetadaten haben. Die Metadaten werden gleichzeitig mit den Headern automatisch aktualisiert. Die Bannermakros sind nicht von diesen Statusmetadaten abhängig (können aber eines Tages daraus generiert werden).

## Experimentell: "Standards-Positionen"-Banner

Gelegentlich sind sich Browseranbieter uneinig darüber, wie sich eine Funktion entwickelt, und einige lehnen sie in ihrer aktuellen Form ab. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und den Browseranbietern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den aktuellen Standardisierungsstatus solcher Funktionen den Lesern klar zu stellen. Während eine längerfristige Lösung zur Darstellung dieser Informationen noch nicht endgültig ist, tun wir für spezifische, hochkarätige Technologien Folgendes, um Verwirrung zu vermeiden:

- Dieses Banner wird auf der Landingpage für diese Funktion hinzugefügt (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die sich gegen die Funktion aussprechen.
  - Verwenden Sie `Anbieter` oder `Anbieter` entsprechend.

- Einen Abschnitt "Standards-Positionen" auf derselben Seite wie das obige Banner hinzufügen, als Unterabschnitt des standardmäßigen "Spezifikationen"-Abschnitts.

> [!NOTE]
> Siehe [Verwandte Webseiten-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards-Positionen"-Abschnitts und dessen Inhalt sowie das Banner auf der Landingpage.
