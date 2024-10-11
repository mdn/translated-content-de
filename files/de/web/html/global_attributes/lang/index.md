---
title: lang
slug: Web/HTML/Global_attributes/lang
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar("Global_attributes")}}

Das **`lang`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) hilft dabei, die Sprache eines Elements zu definieren: die Sprache, in der nicht editierbare Elemente geschrieben sind, oder die Sprache, in der editierbare Elemente vom Benutzer geschrieben werden sollten. Das Attribut enthält ein einzelnes "Sprach-Tag" im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

> [!NOTE]
> Der Standardwert von `lang` ist der leere String, was bedeutet, dass die Sprache unbekannt ist. Daher wird empfohlen, immer einen geeigneten Wert für dieses Attribut anzugeben.

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn das Sprach-Tag gemäß BCP47 ungültig ist, wird es als _ungültig_ betrachtet.

Selbst wenn das `lang`-Attribut gesetzt ist, wird es möglicherweise nicht berücksichtigt, da das `xml:lang`-Attribut Vorrang hat.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachbezeichnungen unterschiedlich, wenn ihre Namen unterschiedlich sind. Also während `:lang(es)` sowohl `lang="es-ES"` als auch `lang="es-419"` übereinstimmt, würde `:lang(xyzzy)` _nicht_ mit `lang="xyzzy-Zorp!"` übereinstimmen.

## Sprach-Tag-Syntax

Die vollständige BCP47-Syntax ist detailliert genug, um extrem spezifische Sprachdialekte zu kennzeichnen, aber die meisten Anwendungen sind viel einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Sprach-Subtags_, wobei jeder Subtag eine bestimmte Eigenschaft der Sprache angibt. Die 3 häufigsten Subtags sind:

- Sprach-Subtag
  - : Erforderlich. Ein 2- oder 3-Zeichen-Code, der die Grundsprache definiert, typischerweise in Kleinschreibung. Zum Beispiel ist der Sprachcode für Englisch `en` und der Code für Badeshi ist `bdz`.
- Schrift-Subtag
  - : Optional. Dieser Subtag definiert das Schriftsystem, das für die Sprache verwendet wird, und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben wird. Zum Beispiel ist Französisch-in-Braille `fr-Brai` und `ja-Kana` ist Japanisch, geschrieben mit dem Katakana-Alphabet. Wenn die Sprache auf eine sehr typische Weise geschrieben wird, wie zum Beispiel Englisch im lateinischen Alphabet, ist es nicht notwendig, diesen Subtag zu verwenden.
- Regions-Subtag
  - : Optional. Dieser Subtag definiert einen Dialekt der Grundsprache aus einem bestimmten Standort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem Gebiet ohne Länderbezug entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` ist Spanisch, wie es in Mittelamerika gesprochen wird. "International Spanish" wäre einfach `es`.

Der Schrift-Subtag geht dem Regions-Subtag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben in der kyrillischen Schrift, wie es in Weißrussland gesprochen wird.

Um die richtigen Subtag-Codes für eine Sprache zu finden, probieren Sie den [Language Subtag Lookup](https://r12a.github.io/app-subtags/) aus.

## Barrierefreiheitsprobleme

Das WCAG-Erfolgskriterium 3.1.1 **verlangt**, dass eine Sprachseite auf eine Weise spezifiziert wird, die 'programmgesteuert bestimmt' werden kann (d.h. über das **`lang`**-Attribut).

Das WCAG-Erfolgskriterium 3.1.2 erfordert, dass Seiten mit **Teilen** in verschiedenen Sprachen auch die Sprachen dieser Teile spezifiziert haben. Wiederum ist das **`lang`**-Attribut der richtige Mechanismus dafür.

Der Zweck dieser Anforderungen besteht hauptsächlich darin, barrierefreien Technologien wie Screenreadern die richtige Aussprache zu ermöglichen.

Zum Beispiel enthält das Sprachmenü auf dieser Seite (MDN) für jedes Eintrag ein **`lang`**-Attribut:

```html
<div class="dropdown-container language-menu">
  <button
    id="header-language-menu"
    type="button"
    class="dropdown-menu-label"
    aria-haspopup="true"
    aria-owns="language-menu"
    aria-label="Current language is English. Choose your preferred language.">
    English
    <span class="dropdown-arrow-down" aria-hidden="true">▼</span>
  </button>
  <ul
    id="language-menu"
    class="dropdown-menu-items right show"
    aria-expanded="true"
    role="menu">
    <li lang="ca" role="menuitem">
      <a href="/ca/docs/Web/HTML/Global_attributes/lang" title="Catalan">
        <bdi>Català</bdi>
      </a>
    </li>
    <li lang="de" role="menuitem">
      <a href="/de/docs/Web/HTML/Globale_Attribute/lang" title="German">
        <bdi>Deutsch</bdi>
      </a>
    </li>
    <li lang="es" role="menuitem">
      <a href="/es/docs/Web/HTML/Atributos_Globales/lang" title="Spanish">
        <bdi>Español</bdi>
      </a>
    </li>
    <li lang="fr" role="menuitem">
      <a href="/fr/docs/Web/HTML/Attributs_universels/lang" title="French">
        <bdi>Français</bdi>
      </a>
    </li>
    <li lang="ja" role="menuitem">
      <a href="/ja/docs/Web/HTML/Global_attributes/lang" title="Japanese">
        <bdi>日本語</bdi>
      </a>
    </li>
    <li lang="ko" role="menuitem">
      <a href="/ko/docs/Web/HTML/Global_attributes/lang" title="Korean">
        <bdi>한국어</bdi>
      </a>
    </li>
    <li lang="pt-BR" role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi>Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li lang="ru" role="menuitem">
      <a href="/ru/docs/Web/HTML/Global_attributes/lang" title="Russian">
        <bdi>Русский</bdi>
      </a>
    </li>
    <li lang="uk" role="menuitem">
      <a
        href="/uk/docs/Web/HTML/%D0%97%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D1%96_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%B8/lang"
        title="Ukrainian">
        <bdi>Українська</bdi>
      </a>
    </li>
    <li lang="zh-Hans" role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi>中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/en-US/docs/Web/HTML/Global_attributes/lang$locales"
        rel="nofollow"
        id="translations-add">
        Add a translation
      </a>
    </li>
  </ul>
</div>
```

## Vererbung

Wenn ein Element kein `lang`-Attribut hat, erbt es den `lang`-Wert vom {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der wiederum von seinem übergeordneten Element erben kann, und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`Content-Language` HTTP-Header](/de/docs/Web/HTTP/Headers/Content-Language)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate)
