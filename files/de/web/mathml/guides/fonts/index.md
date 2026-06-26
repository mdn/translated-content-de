---
title: Fonts für MathML
short-title: Fonts
slug: Web/MathML/Guides/Fonts
l10n:
  sourceCommit: e1369ab17010cbf44d3668a4a3573b58c6efb43e
---

Schriftarten mit geeigneter Unicode-Abdeckung und Open Font Format-Funktionen sind für eine gute mathematische Darstellung erforderlich. Diese Seite beschreibt, wie Benutzer solche mathematischen Schriftarten installieren können, um MathML in Browsern korrekt anzuzeigen.

## Installationsanweisungen

Als generelle Faustregel wird empfohlen, sowohl _Latin Modern Math_ (welches den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern) Stil verwendet, der für mathematische Formeln beliebt ist) als auch _STIX Two Math_ (welches eine große Unicode-Abdeckung für wissenschaftliche Zeichen hat) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anleitungen zur Installation dieser Schriftarten auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die _Latin Modern Math_ und _STIX Two Math_ Schriftarten wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, gehen Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Sie finden eine `latinmodern-math` Schriftdatei.
3. Öffnen Sie die `latinmodern-math` Schriftdatei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das ZIP-Archiv `static_otf.zip` und gehen Sie dann in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular` Datei.
6. Öffnen Sie die `STIXTwoMath-Regular` Datei und klicken Sie auf die Schaltfläche **Installieren**. Bei Bedarf können Sie dies auch mit den anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung sicherstellen.

### macOS

Installieren Sie die _Latin Modern Math_ Schriftart wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, gehen Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Sie finden eine `latinmodern-math` Schriftdatei.
3. Doppelklicken Sie auf die `latinmodern-math` Schriftdatei und klicken Sie auf die Schaltfläche **Schriftart installieren** im sich öffnenden Fenster.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die folgenden Schritte überspringen.

Installieren Sie die _STIX Two Math_ Schriftart wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und gehen Sie dann in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular.otf` Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf` Datei und klicken Sie auf die Schaltfläche **Schriftart installieren** im sich öffnenden Fenster. Bei Bedarf können Sie dies auch mit den anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> **Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert.** Obwohl einige Browser in der Lage sind, diese zu nutzen, wird dringend empfohlen, die obigen Anweisungen für eine optimale mathematische Darstellung zu befolgen.

### Linux

Unten finden Sie Befehle zur Ausführung auf beliebten Linux-Distributionen, um mathematische Schriftarten von Ihrem Paketmanager zu installieren. Es werden auch alternative Ansätze bereitgestellt, falls Ihre Linux-Distribution keine dedizierten Pakete für diese Schriftarten bietet.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern
```

> [!NOTE]
> Das Debian-Paket `fonts-stix` installiert die STIX 1.x Schriftarten, nicht _STIX Two Math_.

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Falls Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_ Schriftarten bietet, ziehen Sie stattdessen in Betracht, die `texlive` Pakete zu installieren, die die _Latin Modern Math_ und _XITS_ Schriftarten enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Sie werden jedoch wahrscheinlich sicherstellen müssen, dass diese Schriftarten Ihrem System bekannt sind. Fügen Sie eine Konfiguration für fontconfig `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype` Verzeichnis von TeXLive verweist, zum Beispiel:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei zur Liste der Systemschriftartenstandorte hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Wenn auf Ihren Linux-Distributionen keine Pakete verfügbar sind oder wenn Sie nur Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie einen `~/.fonts` Ordner, falls dieser noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [mathematischen Satz](https://github.com/notofonts/math/blob/main/documentation/building-math-fonts/index.md).

### Andere Systeme

Auf anderen Systemen ziehen Sie in Betracht, eine [Schriftart mit einer MATH-Tabelle](#schriftarten_mit_einer_math-tabelle) über Ihren Paketmanager zu installieren. Beachten Sie, dass diese Schriftarten in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, aber möglicherweise müssen Sie spezifischen Anweisungen folgen, damit Ihr System die Schriftarten erkennt. Als letztes Mittel installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweitertes Setup

In den folgenden Abschnitten finden Sie weitere nützliche Tipps zur Installation und Konfiguration von Schriftarten für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben sehr wenige Schriftarten geeignete Glyphen für arabische mathematische alphabetische Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir, die _XITS_ oder [Amiri](https://aliftype.com/amiri/) Schriftarten zu installieren.

### Installation ohne Administratorberechtigung

Wenn Sie Schriftarten auf einem System ohne Administratorberechtigung installieren müssen, ist die einfachste Option die Verwendung der mathematischen Schriftart mit dem [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/). Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, auf jeder besuchten Seite ein CSS-Stylesheet sowie Webmathematik-Fonts auf allen Seiten mit MathML-Inhalten zu laden.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftarten-Verzeichnis zu installieren und (falls nötig) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade jeweils `~/Library/Fonts/` und `~/.fonts`.

### Schriftarten mit einer MATH-Tabelle

Sie können tatsächlich jede beliebige [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und sie für die Darstellung von MathML verwenden. Einige Browser bieten die Möglichkeit, die Standardschriftart für MathML im Schriftartenpräferenzmenü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
