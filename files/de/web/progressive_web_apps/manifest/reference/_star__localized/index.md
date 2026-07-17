---
title: "*_localized"
slug: Web/Progressive_web_apps/Manifest/Reference/*_localized
l10n:
  sourceCommit: 429a5b3c0a9363f7f9c700d56380af6226d2348f
---

Das Suffix `_localized` wird zu Manifestmitgliedern hinzugefügt, um lokalisierte Varianten dieser Mitglieder zu erstellen. Der Browser verwendet die Variante, die am besten zu den Spracheinstellungen des Benutzers passt.

## Syntax

```json-nolint
/* Localized text values */
"member_localized": {
  "lang1": text_l10n,
  "lang2": text_l10n,
  "langN": text_l10n,
}

/* Localized icon resources */
"member_localized": {
  "lang1": icon_l10n,
  "lang2": icon_l10n,
  "langN": icon_l10n,
}
```

### Werte

- `member_localized`
  - : Ein Objekt, das lokalisierte Mitgliedervarianten spezifiziert. Zum Beispiel würde `name_localized` lokalisierte Varianten für das [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)-Feld angeben.
    - `lang1` ... `lang2` ... `langN`
      - : Jedes Objekt enthält eine oder mehrere Eigenschaften mit Schlüsseln, die einem {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}} entsprechen und eine Sprache repräsentieren, für die eine Variante bereitgestellt werden soll. Die Eigenschaftswerte können zwei Typen haben:
        - `text_l10n`
          - : Ein Objekt oder ein String, das/die eine Textlokalisierung enthält; siehe [Textlokalisierung](#textlokalisierung).
        - `icon_l10n`
          - : Ein Array von Objekten, das/die Verweise auf lokalisierte Icon-Ressourcen enthält; siehe [Icon-Lokalisierung](#icon-lokalisierung).

#### Textlokalisierung

Wenn die lokalisierte Variante eine Lokalisierung eines Textwertes bietet, können die Eigenschaftswerte Objekte oder Zeichenfolgen sein.

Die Objekt-Darstellung kann die folgenden Eigenschaften haben:

- `value`
  - : Eine Zeichenfolge, die den lokalisierten Text enthält.
- `dir` {{optional_inline}}
  - : Eine Zeichenfolge, die die Schreibrichtung des lokalisierten Textes darstellt. Gültige Werte für `dir` sind:
    - `auto`
      - : Der Standardwert. Gibt an, dass die Schreibrichtung unbekannt ist. Die Richtung wird aus den Spracheinstellungen des Browsers abgeleitet.
    - `ltr`
      - : Gibt eine Schreibrichtung von links nach rechts an.
    - `rtl`
      - : Gibt eine Schreibrichtung von rechts nach links an.
- `lang` {{optional_inline}}
  - : Eine Zeichenfolge, die einen BCP 47-Sprachcode enthält und eine Sprachregion für den lokalisierten Text darstellt.

In den meisten Fällen kann die verkürzte Zeichenfolgen-Darstellung verwendet werden, die den lokalisierten Text `value` enthält. Die Objektform ist nur dann erforderlich, wenn Sie eine abweichende Schreibrichtung zur Standardsprache des Browsers angeben möchten oder wenn der lokalisierte Text in einer anderen Sprache als der des Benutzers präsentiert werden soll.

#### Icon-Lokalisierung

Die `icons_localized`-Eigenschaftswerte sind Arrays, die ein oder mehrere Objekte enthalten, die lokalisierte Icon-Optionen darstellen.

Jedes Objekt enthält die gleichen Eigenschaften wie das nicht-lokalisierte [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Mitglied: `src`, `sizes`, `type` und `purpose`.

#### Shortcut-Lokalisierung

Das [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Mitglied kann lokalisiert werden, jedoch wird dies nicht durch Angabe eines `shortcuts_localized`-Mitgliedes erreicht. Stattdessen stellen Sie `*_localized`-Versionen der Mitglieder `name`, `short_name`, `description` und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) bereit, die im `shortcut`-Mitglied verschachtelt sind.

## Beschreibung

Das Suffix `_localized` wird verwendet, um lokalisierte Manifeste zu erstellen.

Sie können das Suffix `_localized` zu einem unterstützenden Manifestmitglied hinzufügen, um lokalisierte Varianten dieses Mitglieds zu erstellen. Der Browser verwendet die Variante, die am besten zu den Spracheinstellungen des Benutzers passt. Jede Eigenschaft einer lokalisierten Variante hat einen Schlüssel, der einem BCP47-Sprachcode entspricht und die Sprache der Region repräsentiert, sowie einen Wert, der die lokalisierte Variante darstellt.

Wenn einer der Schlüssel mit den Spracheinstellungen des Browsers des Benutzers übereinstimmt, wird diese Variante verwendet. Andernfalls wird der nicht-vorfixierte Manifestmitgliedwert verwendet.

> [!NOTE]
> In Fällen, in denen mehrere verwandte Sprachvarianten angegeben sind, vergleicht der Browser zuerst detailliertere Sprachcodes, bevor er auf allgemeinere Tags zurückgreift. Wenn die Browsersprache des Benutzers beispielsweise auf `fr-CA` eingestellt ist, sucht sie zunächst nach einer Variante mit dem Sprachcode `fr-CA` und fällt dann auf eine `fr`-Variante zurück, falls `fr-CA` nicht verfügbar ist. Falls beide nicht verfügbar sind, wird auf den nicht lokalisierten Wert zurückgegriffen. Siehe [Lokalisieren eines App-Manifests](/de/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest) für ein Beispiel.

Mitglieder, für die lokalisierte Varianten unterstützt werden (sowohl auf der obersten Manifestebene als auch im [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Mitglied):

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

### Lokalisierter Text

Lokalisierte Textfeldeigenschaften haben Werte, die Objekten oder Zeichenfolgen entsprechen; die Zeichenfolgenform ist bei weitem am häufigsten.

Beispiel:

```json
{
  ...
  "name": "The SuperSausage sausage app",
  "name_localized": {
    "fr": "L'application de saucisse SuperSausage",
    "de": "Die SuperWurst-App",
    "ur":  "سپر ساسیج ساسیج ایپ",
    "ja": "スーパーソーセージのソーセージアプリ"
  }
  ...
}
```

Wenn der Benutzer seine Browsersprache auf `fr`, `de`, `ur` oder `ja` eingestellt hat, verwendet der Browser den entsprechenden Namen, der im `name_localized`-Mitglied für diese Sprache gefunden wurde, als den `name` der App. Wenn nicht, verwendet der Browser den Namen, der im `name`-Mitglied gefunden wird.

Manchmal möchten Sie einen anderen `lang`-Wert innerhalb einer lokalisierten Variante angeben als die tatsächliche Sprache dieser Variante. Beispiel:

```json
}
  ...
  "short_name": "SuperSausage",
  "short_name_localized": {
    "fr": {
      "lang": "en-US",
      "value": "Sausage Super"
    },
    "de": "SuperWurst",
    "ur": "سپر ساسیج",
    "ja": "スーパーソーセージ"
  },
  ...
}
```

In diesem Fall kennt unser französisches Publikum unsere App unter einer Variante des englischen Markennamens — "Sausage Super" — und wir möchten angeben, dass dies als Englisch und nicht als Französisch gehandhabt werden sollte (zum Beispiel für Aussprachezwecke). Dies geschieht durch die Angabe eines `lang`-Werts von `en-US` innerhalb der Variante.

### Lokalisierte Icons

Ein lokalisiertes `icons`-Set besteht aus einem Objekt, das mehrere Arrays enthält, von denen jedes Objekte mit den Icon-Optionen für eine andere Sprachregion enthält:

```json
{
  "icons": [
    {
      "src": "./icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    }
  ],
  "icons_localized": {
    "de": [
      {
        "src": "./icons/localized_icons/de/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ],
    "ar": [
      {
        "src": "./icons/localized_icons/ar/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ],
    "fr": [
      {
        "src": "./icons/localized_icons/fr/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ]
  }
}
```

Wenn der Benutzer seine Browsersprache auf `de`, `ar` oder `fr` eingestellt hat, wird ein entsprechender Eintrag vom `icons_localized`-Mitglied verwendet. Andernfalls wird das Icon verwendet, das im `icons`-Mitglied referenziert wird.

Jedes lokalisierte Icon-Array wird als völlig unabhängig von allen anderen behandelt. Wenn ein Icons-Verzeichnis mit den Browserspracheinstellungen des Benutzers übereinstimmt, werden nur Icons aus diesem Verzeichnis für den Benutzer ausgewählt. Wenn Sie beispielsweise 20 Icons innerhalb `icons` spezifiziert haben und nur ein Icon innerhalb `icons_localized.fr` angeben, sieht der Benutzer mit `fr` als Browsersprache überall nur dieses eine Icon. Der Browser durchsucht nicht das `icons`-Array nach besser geeigneten Größen.

### Lokalisierte Shortcuts

Lokalisierte Shortcut-Teilmitglieder werden innerhalb des `shortcuts`-Mitglieds bereitgestellt.

Zum Beispiel:

```json
"shortcuts": [
  {
    "name": "Open dashboard",
    "name_localized": {
      "en": "Open dashboard",
      "de": "Dashboard öffnen",
      "ar": "فتح لوحة المعلومات"
    },
    "short_name": "Dashboard",
    "short_name_localized": {
      "en": "Dashboard",
      "de": "Dashboard",
      "ar": "لوحة"
    },
    "description": "Go to your dashboard.",
    "description_localized": {
      "en": "Go to your dashboard.",
      "de": "Zum Dashboard wechseln.",
      "ar": "انتقل إلى لوحتك."
    },
    "url": "./dashboard",
    "icons": [
      { "src": "./icons/shortcut-dashboard.png", "sizes": "96x96", "type": "image/png", "purpose": "any" }
    ],
    "icons_localized": {
      "en": [
        { "src": "./icons/icon-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "de": [
        { "src": "./icons/localized_icons/de/Iconka-Meow-Cat-purr.128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ar": [
        { "src": "./icons/localized_icons/ar/black_cat-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ]
    }
  }
],
```

## Beispiele

Für Beispiele, schauen Sie sich folgende an:

- Die [PWA-Manifest-Lokalisierungsdemo](https://microsoftedge.github.io/Demos/pwa-manifest-localization/) App ([siehe Quellcode](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-manifest-localization/)).
- Unseren [App-Manifest lokalisieren](/de/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest) Anleitung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [App-Manifest lokalisieren](/de/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest)
- [Localization support for web app manifests](https://developer.chrome.com/blog/manifest-localization) auf developer.chrome.com (2026)
