---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Banner und Hinweise werden auf einigen Seiten, insbesondere in API-Referenzen, angezeigt, um wichtige Faktoren hervorzuheben, die die Verwendung des beschriebenen Inhalts beeinflussen. Banner werden beispielsweise verwendet, um darauf hinzuweisen, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext verwendet werden kann.

Banner werden mit Makros im Seiteninhalt gerendert. Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell eingefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Makros für Banner hinzugefügt werden

Banner werden mit Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten, neben dem Seitenleisten-Makro eingefügt werden. Zum Beispiel wurde im folgenden Block das Makro `\{{SecureContext_Header}}` verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, das Makro `\{{AvailableInWorkers}}` wurde verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle nur im [Window-Kontext](/de/docs/Web/API/Window) und [dediziertem Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um darauf hinzuweisen, dass die Schnittstelle experimentell ist.

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

- `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erzeugt einen **Verfügbar in Workers**-Hinweis, der anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch dem Inhalt hinzugefügt, um die Status in den im [browser compat data](https://github.com/mdn/browser-compat-data) Repository gespeicherten Daten widerzuspiegeln:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Feature-Status im browser-compat-data Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Obwohl Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner haben, werden auch die entsprechenden `experimentell`, `veraltet` und `nicht standardisiert` Statuswerte in den Seitenmetadaten enthalten.
> Die Metadaten werden gleichzeitig mit den Überschriften automatisch aktualisiert.
> Die Banner-Makros sind nicht von diesen Statusmetadaten abhängig (könnten aber eines Tages daraus generiert werden).

## Experimentell: "Standards positions"-Banner

Gelegentlich sind sich Browser-Hersteller uneinig darüber, wie sich ein Feature entwickelt, und einige sprechen sich möglicherweise gegen seine aktuelle Form aus. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und Browser-Herstellern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den aktuellen Standardisierungsstatus solcher Funktionen den Lesern zu verdeutlichen. Während eine langfristige Lösung zur Darstellung dieser Informationen noch nicht endgültig ist, tun wir Folgendes für bestimmte hochkarätige Technologien, um Verwirrung zu vermeiden:

- Dieses Banner auf der Einstiegsseite für diese Funktion hinzufügen (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browser-Hersteller, die gegen die Funktion sind.
  - Verwenden Sie `vendor` oder `vendors` entsprechend.

- Einen "Standards positions"-Abschnitt auf derselben Seite wie das obige Banner hinzufügen, als Unterabschnitt des Standard-"Spezifikationen"-Abschnitts.

> [!NOTE]
> Sehen Sie sich [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) als Beispiel für den Abschnitt "Standards positions" an und was er enthalten sollte, sowie das Banner auf der Einstiegsseite.
