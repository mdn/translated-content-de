---
title: Fonts für MathML
slug: Web/MathML/Fonts
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{MathMLRef}}

Fonts mit geeigneter Unicode-Abdeckung und Open Font Format-Funktionen sind für eine gute Darstellung von mathematischen Ausdrücken erforderlich. Diese Seite beschreibt, wie Benutzer solche mathematischen Fonts installieren können, um MathML in Browsern korrekt darzustellen.

## Installationsanweisungen

Als allgemeine Faustregel wird empfohlen, sowohl _Latin Modern Math_ (das den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet, der bei mathematischen Formeln beliebt ist) als auch _STIX Two Math_ (das eine große Unicode-Abdeckung für wissenschaftliche Zeichen bietet) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Fonts auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Fonts _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das `otf`-Verzeichnis. Dort finden Sie eine `latinmodern-math`-Datei.
3. Öffnen Sie die `latinmodern-math`-Datei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie in das `static_otf`-Verzeichnis. Dort finden Sie eine `STIXTwoMath-Regular`-Datei.
6. Öffnen Sie die `STIXTwoMath-Regular`-Datei und klicken Sie auf die Schaltfläche **Installieren**. Falls gewünscht, können Sie dasselbe auch für die anderen Font-Dateien im Verzeichnis tun.

> **Note:** _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie den Font _Latin Modern Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das `otf`-Verzeichnis. Dort finden Sie eine `latinmodern-math`-Datei.
3. Doppelklicken Sie auf die Datei `latinmodern-math` und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schriftart installieren**.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die unten stehenden Schritte überspringen.

Installieren Sie den Font _STIX Two Math_ wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie in das `static_otf`-Verzeichnis. Dort finden Sie eine `STIXTwoMath-Regular.otf`-Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf`-Datei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schriftart installieren**. Falls gewünscht, können Sie dasselbe auch für die anderen Font-Dateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser sie nutzen können, wird dringend empfohlen, die obigen Anweisungen für eine optimale mathematische Darstellung zu befolgen.

### Linux

Im Folgenden finden Sie Befehle zur Installation der Fonts _Latin Modern Math_ und _STIX Two Math_ über Ihren Paketmanager auf beliebten Linux-Distributionen. Alternative Ansätze werden ebenfalls angeboten, falls Ihre Linux-Distribution keine dedizierten Pakete für diese Fonts bereitstellt.

#### Auf Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Auf Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### Auf openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Auf Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Falls Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_ Fonts bietet, ziehen Sie stattdessen die Installation der `texlive`-Pakete mit den _Latin Modern Math_ und _XITS_ Fonts in Betracht. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Es ist jedoch wahrscheinlich, dass Sie sicherstellen müssen, dass diese Schriften Ihrem System bekannt sind. Fügen Sie eine Fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype`-Verzeichnis von TeXLive verweist, wie zum Beispiel:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Abschließend fügen Sie diese Konfigurationsdatei zur Liste der System-Schriftorte hinzu und regenerieren den Fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Falls keine Pakete für Ihre Linux-Distributionen verfügbar sind, oder wenn Sie einfach die Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein `~/.fonts`, falls es noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den Fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

> [!NOTE]
> Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [Google plant die Unterstützung für mathematische Layoutfunktionen hinzuzufügen](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Andere Systeme

Auf anderen Systemen sollten Sie in Betracht ziehen, einen [Font mit einer MATH-Tabelle](#fonts_mit_einer_math-tabelle) über Ihren Paketmanager zu installieren. Beachten Sie, dass diese Fonts in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, aber möglicherweise müssen Sie spezifische Anweisungen befolgen, damit Ihr System die Fonts erkennt. Als letzte Möglichkeit installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweitertes Setup

In den nächsten Abschnitten finden Sie weitere nützliche Hinweise zur Installation und Konfiguration von Fonts für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben nur sehr wenige Fonts geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie diese Zeichen wahrscheinlich benötigen, empfehlen wir, die _XITS_ oder [Amiri](https://www.amirifont.org/) Fonts zu installieren.

### Installation ohne Administratorrechte

Wenn Sie Fonts auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option die Verwendung des [MathML-fonts Add-ons](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/). Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser dazu zwingt, ein CSS-Stilblatt auf jeder von Ihnen besuchten Seite sowie Web-Schriftarten auf allen Seiten mit MathML-Inhalt zu laden.

Eine bessere Alternative auf UNIX-Systemen ist die Installation der OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftart-Verzeichnis und (falls erforderlich) das Ausführen von `fc-cache` darauf. Auf macOS und Linux sind die Standardpfade `~/Library/Fonts/` bzw. `~/.fonts`.

### Fonts mit einer MATH-Tabelle

Sie können tatsächlich jeden [mathematischen OpenType-Font](https://fred-wang.github.io/MathFonts/) installieren und für die MathML-Darstellung verwenden. Einige Browser bieten die Möglichkeit, die Standard-Schriftart für MathML in ihrem Schriftarten-Menü zu konfigurieren. Alternativ können Sie das [MathML-fontsettings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

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
