---
title: lang
slug: Web/HTML/Global_attributes/lang
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar("Global_attributes")}}

Das **`lang`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente geschrieben sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollten. Das Attribut enthält einen einzelnen "Sprach-Tag" im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

> [!NOTE]
> Der Standardwert von `lang` ist der leere String, was bedeutet, dass die Sprache unbekannt ist. Deshalb wird empfohlen, immer einen geeigneten Wert für dieses Attribut anzugeben.

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn der Sprach-Tag gemäß BCP47 nicht gültig ist, wird sie auf _ungültig_ gesetzt.

Selbst wenn das **lang**-Attribut gesetzt ist, könnte es nicht berücksichtigt werden, da das [**xml:lang**](/de/docs/Web/HTML/Global_attributes#lang) Attribut Vorrang hat.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachennamen unterschiedlich, wenn ihre Namen unterschiedlich sind. Während also `:lang(es)` sowohl `lang="es-ES"` als auch `lang="es-419"` entspricht, würde `:lang(xyzzy)` _nicht_ `lang="xyzzy-Zorp!"` entsprechen.

## Syntax des Sprach-Tags

Die vollständige BCP47-Syntax ist detailliert genug, um extrem spezifische Sprachdialekte zu kennzeichnen, aber die meisten Verwendungen sind viel einfacher.

Ein Sprach-Tag besteht aus mit Bindestrichen getrennten _Sprachuntertags_, wobei jeder Untertag eine bestimmte Eigenschaft der Sprache angibt. Die 3 häufigsten Untertags sind:

- Sprach-Untertag
  - : Erforderlich. Ein 2- oder 3-stelliger Code, der die Grundsprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Skript-Untertag
  - : Optional. Dieser Untertag definiert das Schriftsystem, das für die Sprache verwendet wird, und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben ist. Zum Beispiel ist Französisch in Braille `fr-Brai` und `ja-Kana` ist Japanisch, geschrieben mit dem Katakana-Alphabet. Wenn die Sprache auf eine sehr typische Weise geschrieben wird, wie Englisch im Lateinischen Alphabet, besteht keine Notwendigkeit, diesen Untertag zu verwenden.
- Regions-Untertag
  - : Optional. Dieser Untertag definiert einen Dialekt der Basissprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem nicht-landesspezifischen Gebiet entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` ist Spanisch, wie es in Zentralamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Der Skript-Untertag steht vor dem Regions-Untertag, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Weißrussland gesprochen wird.

Um die korrekten Untertag-Codes für eine Sprache zu finden, versuchen Sie [die Language Subtag Lookup](https://r12a.github.io/app-subtags/).

## Zugänglichkeitsaspekte

Das WCAG-Erfolgskriterium 3.1.1 **erfordert**, dass eine Seiten-Sprache auf eine Weise angegeben wird, die „programmatisch bestimmt“ werden kann (d.h. über das **`lang`** Attribut).

Das WCAG-Erfolgskriterium 3.1.2 erfordert, dass bei Seiten mit **Teilen** in verschiedenen Sprachen auch die Sprachen dieser Teile angegeben sind. Auch hier ist das **`lang`** Attribut der korrekte Mechanismus dafür.

Der Zweck dieser Anforderungen ist es hauptsächlich, unterstützende Technologien wie Bildschirmleser in die Lage zu versetzen, die richtige Aussprache anzuwenden.

Zum Beispiel umfasst das Sprachmenü auf dieser Seite (MDN) ein **`lang`** Attribut für jeden Eintrag:

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

Wenn ein Element kein `lang` Attribut hat, übernimmt es den `lang` Wert, der an seinem {{Glossary("Node/DOM", "Elternknoten")}} gesetzt ist, der wiederum von seinen Eltern erben kann und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`Content-Language` HTTP Header](/de/docs/Web/HTTP/Headers/Content-Language)
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes#translate) Attribut
